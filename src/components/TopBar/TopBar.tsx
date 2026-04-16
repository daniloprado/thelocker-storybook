import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon/Icon';
import './TopBar.css';

export interface TopBarProps extends HTMLAttributes<HTMLElement> {
  /** Content rendered on the left side of the bar */
  leftControls?: ReactNode;
  /** Content rendered on the right side; defaults to the standard action bar */
  rightControls?: ReactNode;
  /** User display name shown in the profile card */
  userName?: string;
  /** Avatar image URL for the profile card */
  avatarSrc?: string;
  /** Show the AI Workout Builder button */
  showAiButton?: boolean;
  /** Show the notification badge dot */
  hasNotification?: boolean;
  /** Callback when the AI button is clicked */
  onAiClick?: () => void;
  /** Callback when the add (+) button is clicked */
  onAddClick?: () => void;
  /** Callback when the notification icon is clicked */
  onNotificationClick?: () => void;
  /** Callback when the help icon is clicked */
  onHelpClick?: () => void;
  /** Callback when the profile card is clicked */
  onProfileClick?: () => void;
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function TopBar({
  leftControls,
  rightControls,
  userName = 'Jaron Lanier',
  avatarSrc,
  showAiButton = true,
  hasNotification = true,
  onAiClick,
  onAddClick,
  onNotificationClick,
  onHelpClick,
  onProfileClick,
  className,
  ...rest
}: TopBarProps) {
  return (
    <header {...rest} className={cx('topbar', className)}>
      <div className="topbar__left">{leftControls}</div>

      <div className="topbar__right">
        {rightControls ?? (
          <>
            {showAiButton && (
              <button type="button" className="topbar__ai-btn" onClick={onAiClick}>
                <Icon fa-code="wand-magic-sparkles" fa-style="solid" size="small" />
                AI WORKOUT BUILDER
                <span className="topbar__ai-badge">BETA</span>
              </button>
            )}

            <button type="button" className="topbar__icon-btn" onClick={onAddClick} aria-label="Add">
              <Icon fa-code="plus" fa-style="solid" size="small" />
            </button>

            <div className="topbar__icon-group">
              <button type="button" className="topbar__icon-action" onClick={onNotificationClick} aria-label="Notifications">
                <Icon fa-code="bell" fa-style="regular" size="medium" />
                {hasNotification && <span className="topbar__notification-dot" />}
              </button>
              <button type="button" className="topbar__icon-action" onClick={onHelpClick} aria-label="Help">
                <Icon fa-code="circle-question" fa-style="regular" size="medium" />
              </button>
            </div>

            <button type="button" className="topbar__profile" onClick={onProfileClick}>
              {avatarSrc ? (
                <img className="topbar__profile-avatar" src={avatarSrc} alt="" />
              ) : (
                <span className="topbar__profile-avatar" style={{ background: 'var(--color-grey-primary-500, #dbdbdb)' }} />
              )}
              <p className="topbar__profile-name">{userName}</p>
              <span className="topbar__profile-chevron">
                <Icon fa-code="chevron-down" fa-style="solid" size="xxsmall" />
              </span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
