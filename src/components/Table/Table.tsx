import { useEffect, useMemo, useState } from 'react';
import type { Key, ReactNode } from 'react';
import { Button } from '../Button/Button';
import './Table.css';

export type TableSize = 'small' | 'middle' | 'large';

export type TableColumn = {
  key: string;
  title: ReactNode;
  dataIndex?: string;
  align?: 'left' | 'center' | 'right';
  width?: number | string;
  render?: (value: unknown, record: Record<string, unknown>, index: number) => ReactNode;
};

export type TablePagination = false | {
  pageSize?: number;
  defaultCurrent?: number;
};

export interface TableProps {
  columns: TableColumn[];
  dataSource: Array<Record<string, unknown>>;
  rowKey?: string | ((record: Record<string, unknown>, index: number) => Key);
  size?: TableSize;
  bordered?: boolean;
  loading?: boolean;
  striped?: boolean;
  pagination?: TablePagination;
  emptyText?: ReactNode;
}

function getByPath(record: Record<string, unknown>, path?: string): unknown {
  if (!path) return undefined;
  return path
    .split('.')
    .reduce<unknown>((current, key) => {
      if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, record);
}

function resolveRowKey(
  rowKey: TableProps['rowKey'],
  record: Record<string, unknown>,
  index: number
): Key {
  if (typeof rowKey === 'function') {
    return rowKey(record, index);
  }

  if (typeof rowKey === 'string') {
    const value = record[rowKey];
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
  }

  const fallback = record.key;
  if (typeof fallback === 'string' || typeof fallback === 'number') {
    return fallback;
  }

  return index;
}

export function Table({
  columns,
  dataSource,
  rowKey = 'key',
  size = 'middle',
  bordered = false,
  loading = false,
  striped = false,
  pagination = { pageSize: 5, defaultCurrent: 1 },
  emptyText = 'No data'
}: TableProps) {
  const pageSize = pagination && pagination.pageSize ? pagination.pageSize : dataSource.length || 1;
  const defaultCurrent = pagination && pagination.defaultCurrent ? pagination.defaultCurrent : 1;

  const [currentPage, setCurrentPage] = useState(defaultCurrent);

  const totalPages = Math.max(1, Math.ceil(dataSource.length / pageSize));

  useEffect(() => {
    setCurrentPage((current) => Math.min(current, totalPages));
  }, [totalPages]);

  const pageData = useMemo(() => {
    if (!pagination) return dataSource;
    const start = (currentPage - 1) * pageSize;
    return dataSource.slice(start, start + pageSize);
  }, [pagination, currentPage, pageSize, dataSource]);

  return (
    <div className={[
      'table',
      `table--${size}`,
      bordered ? 'table--bordered' : '',
      loading ? 'table--loading' : ''
    ].filter(Boolean).join(' ')}>
      {loading ? <div className="table__loading">Loading...</div> : null}

      <table className="table__element">
        <thead className="table__head">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  textAlign: column.align ?? 'left',
                  width: column.width
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {pageData.length === 0 ? (
            <tr>
              <td className="table__empty" colSpan={columns.length}>{emptyText}</td>
            </tr>
          ) : (
            pageData.map((record, rowIndex) => (
              <tr
                key={resolveRowKey(rowKey, record, rowIndex)}
                className={[
                  'table__row',
                  striped ? 'table__row--striped' : ''
                ].filter(Boolean).join(' ')}
              >
                {columns.map((column) => {
                  const value = getByPath(record, column.dataIndex);
                  return (
                    <td key={column.key} style={{ textAlign: column.align ?? 'left' }}>
                      {column.render ? column.render(value, record, rowIndex) : String(value ?? '')}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {pagination && totalPages > 1 ? (
        <div className="table__pagination">
          <Button
            className="table__pagination-btn"
            variant="outline"
            size="small"
            state={currentPage === 1 ? 'disabled' : 'default'}
            label="Prev"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          />

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              className="table__pagination-btn"
              variant="outline"
              size="small"
              state={page === currentPage ? 'active' : 'default'}
              label={String(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              onClick={() => setCurrentPage(page)}
            />
          ))}

          <Button
            className="table__pagination-btn"
            variant="outline"
            size="small"
            state={currentPage === totalPages ? 'disabled' : 'default'}
            label="Next"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          />
        </div>
      ) : null}
    </div>
  );
}
