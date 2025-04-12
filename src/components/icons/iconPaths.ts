/**
 * Icon paths extracted from Figma
 * Each icon is represented by its SVG path data
 */

export type IconName = 
  | 'activity'
  | 'airplay'
  | 'alert-circle'
  | 'alert-octagon'
  | 'alert-triangle'
  | 'align-center'
  | 'align-justify'
  | 'align-left'
  | 'align-right'
  | 'anchor'
  | 'aperture'
  | 'archive'
  | 'pen-tool'
  | 'arrow-down'
  | 'arrow-down-circle'
  | 'arrow-down-left'
  | 'arrow-down-right'
  | 'arrow-left'
  | 'arrow-left-circle'
  | 'arrow-right'
  | 'arrow-right-circle'
  | 'arrow-up'
  | 'arrow-up-circle'
  | 'arrow-up-left'
  | 'arrow-up-right'
  | 'at-sign'
  | 'award'
  | 'bar-chart'
  | 'bar-chart-2'
  | 'battery'
  | 'battery-charging'
  | 'bell'
  | 'bell-off'
  | 'bluetooth'
  | 'bold'
  | 'book'
  | 'book-open'
  | 'bookmark'
  | 'box'
  | 'briefcase'
  | 'calendar'
  | 'camera'
  | 'camera-off'
  | 'cast'
  | 'check'
  | 'check-circle'
  | 'check-square'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevrons-down'
  | 'chevrons-left'
  | 'chevrons-right'
  | 'chevrons-up'
  | 'chrome'
  | 'circle'
  | 'clipboard'
  | 'clock'
  | 'close'
  | 'cloud'
  | 'cloud-drizzle'
  | 'cloud-lightning'
  | 'cloud-off'
  | 'cloud-rain'
  | 'cloud-snow'
  | 'code'
  | 'codepen'
  | 'coffee'
  | 'command'
  | 'compass'
  | 'copy'
  | 'corner-down-left'
  | 'corner-down-right'
  | 'corner-left-down'
  | 'corner-left-up'
  | 'corner-right-down'
  | 'corner-right-up'
  | 'corner-up-left'
  | 'corner-up-right'
  | 'cpu'
  | 'credit-card'
  | 'crop'
  | 'crosshair'
  | 'database'
  | 'delete'
  | 'disc'
  | 'dollar-sign'
  | 'download'
  | 'download-cloud'
  | 'droplet'
  | 'edit'
  | 'edit-2'
  | 'edit-3'
  | 'external-link'
  | 'eye'
  | 'eye-off'
  | 'facebook'
  | 'fast-forward'
  | 'feather'
  | 'file'
  | 'file-minus'
  | 'file-plus'
  | 'file-text'
  | 'film'
  | 'filter'
  | 'flag'
  | 'folder'
  | 'folder-minus'
  | 'folder-plus'
  | 'gift'
  | 'git-branch'
  | 'git-commit'
  | 'git-merge'
  | 'git-pull-request'
  | 'github'
  | 'gitlab'
  | 'globe'
  | 'grid'
  | 'hard-drive'
  | 'hash'
  | 'headphones'
  | 'heart'
  | 'help-circle'
  | 'home'
  | 'image'
  | 'inbox'
  | 'info'
  | 'instagram'
  | 'italic'
  | 'key'
  | 'layers'
  | 'layout'
  | 'life-buoy'
  | 'link'
  | 'link-2'
  | 'linkedin'
  | 'list'
  | 'loader'
  | 'lock'
  | 'log-in'
  | 'log-out'
  | 'mail'
  | 'map'
  | 'map-pin'
  | 'maximize'
  | 'maximize-2'
  | 'menu'
  | 'message-circle'
  | 'message-square'
  | 'mic'
  | 'mic-off'
  | 'minimize'
  | 'minimize-2'
  | 'minus'
  | 'minus-circle'
  | 'minus-square'
  | 'monitor'
  | 'moon'
  | 'more-horizontal'
  | 'more-vertical'
  | 'move'
  | 'music'
  | 'navigation'
  | 'navigation-2'
  | 'octagon'
  | 'package'
  | 'paperclip'
  | 'pause'
  | 'pause-circle'
  | 'percent'
  | 'phone'
  | 'phone-call'
  | 'phone-forwarded'
  | 'phone-incoming'
  | 'phone-missed'
  | 'phone-off'
  | 'phone-outgoing'
  | 'pie-chart'
  | 'play'
  | 'play-circle'
  | 'plus'
  | 'plus-circle'
  | 'plus-square'
  | 'pocket'
  | 'power'
  | 'printer'
  | 'radio'
  | 'refresh-ccw'
  | 'refresh-cw'
  | 'repeat'
  | 'rewind'
  | 'rotate-ccw'
  | 'rotate-cw'
  | 'rss'
  | 'save'
  | 'scissors'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'share'
  | 'share-2'
  | 'shield'
  | 'shield-off'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'shuffle'
  | 'sidebar'
  | 'skip-back'
  | 'skip-forward'
  | 'slack'
  | 'slash'
  | 'sliders'
  | 'smartphone'
  | 'speaker'
  | 'square'
  | 'star'
  | 'stop-circle'
  | 'sun'
  | 'sunrise'
  | 'sunset'
  | 'tablet'
  | 'tag'
  | 'target'
  | 'terminal'
  | 'thermometer'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'toggle-left'
  | 'toggle-right'
  | 'trash'
  | 'trash-2'
  | 'trello'
  | 'trending-down'
  | 'trending-up'
  | 'triangle'
  | 'truck'
  | 'tv'
  | 'twitter'
  | 'type'
  | 'umbrella'
  | 'underline'
  | 'unlock'
  | 'upload'
  | 'upload-cloud'
  | 'user'
  | 'user-check'
  | 'user-minus'
  | 'user-plus'
  | 'user-x'
  | 'users'
  | 'video'
  | 'video-off'
  | 'voicemail'
  | 'volume'
  | 'volume-1'
  | 'volume-2'
  | 'volume-x'
  | 'watch'
  | 'wifi'
  | 'wifi-off'
  | 'wind'
  | 'x'
  | 'x-circle'
  | 'x-octagon'
  | 'x-square'
  | 'youtube'
  | 'zap'
  | 'zap-off'
  | 'zoom-in'
  | 'zoom-out';

export interface IconPath {
  path: string;
  viewBox: string;
}

// SVG paths extracted from Figma
export const iconPaths: Record<IconName, IconPath> = {
  'activity': {
    viewBox: '0 0 24 24',
    path: 'M22 12h-4l-3 9L9 3l-3 9H2'
  },
  'anchor': {
    viewBox: '0 0 24 24',
    path: 'M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 4v16M5 16H2a10 10 0 0 0 20 0h-3M22 12H2'
  },
  'aperture': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94'
  },
  'archive': {
    viewBox: '0 0 24 24',
    path: 'M21 8v13H3V8M1 3h22v5H1zM10 12h4'
  },
  'airplay': {
    viewBox: '0 0 24 24',
    path: 'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1M12 15l5 6H7l5-6z'
  },
  'alert-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4m0 4h.01'
  },
  'alert-octagon': {
    viewBox: '0 0 24 24',
    path: 'M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4m0 4h.01'
  },
  'alert-triangle': {
    viewBox: '0 0 24 24',
    path: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01'
  },
  'align-center': {
    viewBox: '0 0 24 24',
    path: 'M18 10H6M21 6H3M21 14H3M18 18H6'
  },
  'align-justify': {
    viewBox: '0 0 24 24',
    path: 'M21 10H3M21 6H3M21 14H3M21 18H3'
  },
  'align-left': {
    viewBox: '0 0 24 24',
    path: 'M17 10H3M21 6H3M21 14H3M17 18H3'
  },
  'align-right': {
    viewBox: '0 0 24 24',
    path: 'M21 10H7M21 6H3M21 14H3M21 18H7'
  },
  'arrow-down': {
    viewBox: '0 0 24 24',
    path: 'M12 5v14m-7-7 7 7 7-7'
  },
  'arrow-down-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-6-10 6 6 6-6M12 8v10'
  },
  'arrow-down-left': {
    viewBox: '0 0 24 24',
    path: 'M17 7 7 17M17 17H7V7'
  },
  'arrow-down-right': {
    viewBox: '0 0 24 24',
    path: 'M7 7l10 10M17 7v10H7'
  },
  'arrow-left': {
    viewBox: '0 0 24 24',
    path: 'M19 12H5m7 7-7-7 7-7'
  },
  'arrow-left-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-6 6-6-6-6M16 12H8'
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    path: 'M5 12h14m-7-7 7 7-7 7'
  },
  'arrow-right-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-6-6-6 6-6M8 12h8'
  },
  'arrow-up': {
    viewBox: '0 0 24 24',
    path: 'M12 19V5m-7 7 7-7 7 7'
  },
  'arrow-up-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-6-10 6-6 6 6M12 16V6'
  },
  'arrow-up-left': {
    viewBox: '0 0 24 24',
    path: 'M17 17 7 7M7 17V7h10'
  },
  'arrow-up-right': {
    viewBox: '0 0 24 24',
    path: 'M7 17 17 7M7 7h10v10'
  },
  'at-sign': {
    viewBox: '0 0 24 24',
    path: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M16 12v1a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94'
  },
  'award': {
    viewBox: '0 0 24 24',
    path: 'M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.21 13.89 7 23l5-3 5 3-1.21-9.12'
  },
  'bar-chart': {
    viewBox: '0 0 24 24',
    path: 'M12 20V10M18 20V4M6 20v-4'
  },
  'bar-chart-2': {
    viewBox: '0 0 24 24',
    path: 'M18 20V10M12 20V4M6 20v-6'
  },
  'battery': {
    viewBox: '0 0 24 24',
    path: 'M17 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm5 4h-2v4h2z'
  },
  'battery-charging': {
    viewBox: '0 0 24 24',
    path: 'M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2.001 2.001 0 0 1-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6'
  },
  'bell': {
    viewBox: '0 0 24 24',
    path: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0'
  },
  'bell-off': {
    viewBox: '0 0 24 24',
    path: 'M13.73 21a2 2 0 0 1-3.46 0M18.63 13A17.89 17.89 0 0 1 18 8M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14M18 8a6 6 0 0 0-9.33-5M1 1l22 22'
  },
  'bluetooth': {
    viewBox: '0 0 24 24',
    path: 'M6.5 6.5 17.5 17.5L12 23V1l5.5 5.5L6.5 17.5'
  },
  'bold': {
    viewBox: '0 0 24 24',
    path: 'M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z'
  },
  'book': {
    viewBox: '0 0 24 24',
    path: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12z M8 18h12M8 22V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16'
  },
  'book-open': {
    viewBox: '0 0 24 24',
    path: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'
  },
  'bookmark': {
    viewBox: '0 0 24 24',
    path: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'
  },
  'box': {
    viewBox: '0 0 24 24',
    path: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12'
  },
  'briefcase': {
    viewBox: '0 0 24 24',
    path: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'
  },
  'calendar': {
    viewBox: '0 0 24 24',
    path: 'M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM2 10h20M8 2v8M16 2v8'
  },
  'camera': {
    viewBox: '0 0 24 24',
    path: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
  },
  'camera-off': {
    viewBox: '0 0 24 24',
    path: 'M1 1l22 22M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-1.84 1.19A2 2 0 0 1 21 19 9.165 9.165 0 0 1 14.16 8.25A4 4 0 0 0 12 8a4 4 0 0 0-1.84 7.53'
  },
  'cast': {
    viewBox: '0 0 24 24',
    path: 'M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01'
  },
  'check': {
    viewBox: '0 0 24 24',
    path: 'M20 6 9 17l-5-5'
  },
  'check-circle': {
    viewBox: '0 0 24 24',
    path: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3'
  },
  'check-square': {
    viewBox: '0 0 24 24',
    path: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
  },
  'chevron-down': {
    viewBox: '0 0 24 24',
    path: 'M6 9l6 6 6-6'
  },
  'chevron-left': {
    viewBox: '0 0 24 24',
    path: 'M15 18l-6-6 6-6'
  },
  'chevron-right': {
    viewBox: '0 0 24 24',
    path: 'M9 18l6-6-6-6'
  },
  'chevron-up': {
    viewBox: '0 0 24 24',
    path: 'M18 15l-6-6-6 6'
  },
  'chevrons-down': {
    viewBox: '0 0 24 24',
    path: 'M7 13l5 5 5-5M7 6l5 5 5-5'
  },
  'chevrons-left': {
    viewBox: '0 0 24 24',
    path: 'M11 17l-5-5 5-5M18 17l-5-5 5-5'
  },
  'chevrons-right': {
    viewBox: '0 0 24 24',
    path: 'M13 17l5-5-5-5M6 17l5-5-5-5'
  },
  'chevrons-up': {
    viewBox: '0 0 24 24',
    path: 'M17 11l-5-5-5 5M17 18l-5-5-5 5'
  },
  'close': {
    viewBox: '0 0 24 24',
    path: 'M18 6 6 18M6 6l12 12'
  },
  'chrome': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M21.17 8H12M3.95 6.06 8.54 14M10.88 21.94 15.46 14'
  },
  'circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
  },
  'clipboard': {
    viewBox: '0 0 24 24',
    path: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M14 2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z'
  },
  'clock': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2'
  },
  'cloud': {
    viewBox: '0 0 24 24',
    path: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'
  },
  'cloud-drizzle': {
    viewBox: '0 0 24 24',
    path: 'M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25'
  },
  'cloud-lightning': {
    viewBox: '0 0 24 24',
    path: 'M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9M13 11l-4 6h6l-4 6'
  },
  'cloud-off': {
    viewBox: '0 0 24 24',
    path: 'M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3M1 1l22 22'
  },
  'cloud-rain': {
    viewBox: '0 0 24 24',
    path: 'M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25'
  },
  'cloud-snow': {
    viewBox: '0 0 24 24',
    path: 'M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01'
  },
  'code': {
    viewBox: '0 0 24 24',
    path: 'M16 18l6-6-6-6M8 6l-6 6 6 6'
  },
  'codepen': {
    viewBox: '0 0 24 24',
    path: 'M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zm0 20v-6.5m0-13v6.5m0 0 10-6.5M12 15.5 2 9M22 9v6.5M2 9v6.5m10-6.5L2 15.5m10-6.5 10 6.5'
  },
  'coffee': {
    viewBox: '0 0 24 24',
    path: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3'
  },
  'command': {
    viewBox: '0 0 24 24',
    path: 'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'
  },
  'compass': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z'
  },
  'copy': {
    viewBox: '0 0 24 24',
    path: 'M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'
  },
  'corner-down-left': {
    viewBox: '0 0 24 24',
    path: 'M9 10l-5 5 5 5M20 4v7a4 4 0 0 1-4 4H4'
  },
  'corner-down-right': {
    viewBox: '0 0 24 24',
    path: 'M15 10l5 5-5 5M4 4v7a4 4 0 0 0 4 4h12'
  },
  'corner-left-down': {
    viewBox: '0 0 24 24',
    path: 'M14 15l-5 5-5-5M20 4h-7a4 4 0 0 0-4 4v12'
  },
  'corner-left-up': {
    viewBox: '0 0 24 24',
    path: 'M14 9l-5-5-5 5M20 20h-7a4 4 0 0 1-4-4V4'
  },
  'corner-right-down': {
    viewBox: '0 0 24 24',
    path: 'M10 15l5 5 5-5M4 4h7a4 4 0 0 1 4 4v12'
  },
  'corner-right-up': {
    viewBox: '0 0 24 24',
    path: 'M10 9l5-5 5 5M4 20h7a4 4 0 0 0 4-4V4'
  },
  'corner-up-left': {
    viewBox: '0 0 24 24',
    path: 'M9 14l-5-5 5-5M20 20v-7a4 4 0 0 0-4-4H4'
  },
  'corner-up-right': {
    viewBox: '0 0 24 24',
    path: 'M15 14l5-5-5-5M4 20v-7a4 4 0 0 1 4-4h12'
  },
  'cpu': {
    viewBox: '0 0 24 24',
    path: 'M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M9 9h6v6H9z M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3'
  },
  'credit-card': {
    viewBox: '0 0 24 24',
    path: 'M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M1 10h22M4 15h2M10 15h2'
  },
  'crop': {
    viewBox: '0 0 24 24',
    path: 'M6.13 1 6 16a2 2 0 0 0 2 2h15M1 6.13 16 6a2 2 0 0 1 2 2v15'
  },
  'crosshair': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M22 12h-4M6 12H2M12 6V2M12 22v-4'
  },
  'database': {
    viewBox: '0 0 24 24',
    path: 'M12 2a9 3 0 0 0-9 3v14a9 3 0 0 0 18 0V5a9 3 0 0 0-9-3zM3 5a9 3 0 0 1 18 0M3 12a9 3 0 0 1 18 0M3 19a9 3 0 0 1 18 0'
  },
  'delete': {
    viewBox: '0 0 24 24',
    path: 'M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M18 9l-6 6M12 9l6 6'
  },
  'disc': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M12 8V2M16.24 7.76l2.12-2.12M15 12h5M16.24 16.24l2.12 2.12M12 16v5M7.76 16.24l-2.12 2.12M8 12H3M7.76 7.76 5.64 5.64'
  },
  'dollar-sign': {
    viewBox: '0 0 24 24',
    path: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  'download': {
    viewBox: '0 0 24 24',
    path: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3'
  },
  'download-cloud': {
    viewBox: '0 0 24 24',
    path: 'M8 17l4 4 4-4M12 12v9M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29'
  },
  'droplet': {
    viewBox: '0 0 24 24',
    path: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'
  },
  'edit': {
    viewBox: '0 0 24 24',
    path: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'
  },
  'edit-2': {
    viewBox: '0 0 24 24',
    path: 'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'
  },
  'edit-3': {
    viewBox: '0 0 24 24',
    path: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'
  },
  'external-link': {
    viewBox: '0 0 24 24',
    path: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3'
  },
  'eye': {
    viewBox: '0 0 24 24',
    path: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  },
  'eye-off': {
    viewBox: '0 0 24 24',
    path: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22'
  },
  'facebook': {
    viewBox: '0 0 24 24',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
  },
  'fast-forward': {
    viewBox: '0 0 24 24',
    path: 'M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z'
  },
  'feather': {
    viewBox: '0 0 24 24',
    path: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z M16 8 2 22M17.5 15H9'
  },
  'file': {
    viewBox: '0 0 24 24',
    path: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM13 2v7h7'
  },
  'file-minus': {
    viewBox: '0 0 24 24',
    path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6M9 15h6'
  },
  'file-plus': {
    viewBox: '0 0 24 24',
    path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6M12 18v-6M9 15h6'
  },
  'file-text': {
    viewBox: '0 0 24 24',
    path: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6M16 13H8M16 17H8M10 9H8'
  },
  'film': {
    viewBox: '0 0 24 24',
    path: 'M19.82 2H4.18A2.18 2.18 0 0 0 2 4.18v15.64A2.18 2.18 0 0 0 4.18 22h15.64A2.18 2.18 0 0 0 22 19.82V4.18A2.18 2.18 0 0 0 19.82 2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5'
  },
  'filter': {
    viewBox: '0 0 24 24',
    path: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z'
  },
  'flag': {
    viewBox: '0 0 24 24',
    path: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'
  },
  'folder': {
    viewBox: '0 0 24 24',
    path: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'
  },
  'folder-minus': {
    viewBox: '0 0 24 24',
    path: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11zM9 14h6'
  },
  'folder-plus': {
    viewBox: '0 0 24 24',
    path: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11zM12 11v6M9 14h6'
  },
  'gift': {
    viewBox: '0 0 24 24',
    path: 'M20 12v10H4V12M2 7h20v5H2V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'
  },
  'git-branch': {
    viewBox: '0 0 24 24',
    path: 'M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9'
  },
  'git-commit': {
    viewBox: '0 0 24 24',
    path: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM1.05 12H7M17.01 12h5.95'
  },
  'git-merge': {
    viewBox: '0 0 24 24',
    path: 'M18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21V9a9 9 0 0 0 9 9'
  },
  'git-pull-request': {
    viewBox: '0 0 24 24',
    path: 'M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM13 6h3a2 2 0 0 1 2 2v7M6 9v12'
  },
  'github': {
    viewBox: '0 0 24 24',
    path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
  },
  'gitlab': {
    viewBox: '0 0 24 24',
    path: 'M22.65 14.39 12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z'
  },
  'globe': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
  },
  'grid': {
    viewBox: '0 0 24 24',
    path: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z'
  },
  'hard-drive': {
    viewBox: '0 0 24 24',
    path: 'M22 12H2m3-7V2h14v3M5 19v3h14v-3M6 12v7h12v-7M6 5v7h12V5M14 16h.01M18 16h.01'
  },
  'hash': {
    viewBox: '0 0 24 24',
    path: 'M4 9h16M4 15h16M10 3v18M14 3v18'
  },
  'headphones': {
    viewBox: '0 0 24 24',
    path: 'M3 18v-6a9 9 0 0 1 18 0v6m-9-10v6m-5 6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm8 0a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z'
  },
  'heart': {
    viewBox: '0 0 24 24',
    path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
  },
  'help-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01'
  },
  'home': {
    viewBox: '0 0 24 24',
    path: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10'
  },
  'image': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M21 15l-5-5L5 21'
  },
  'inbox': {
    viewBox: '0 0 24 24',
    path: 'M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'
  },
  'info': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16v-4M12 8h.01'
  },
  'instagram': {
    viewBox: '0 0 24 24',
    path: 'M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01'
  },
  'italic': {
    viewBox: '0 0 24 24',
    path: 'M19 4h-9M14 20H5M15 4 9 20'
  },
  'key': {
    viewBox: '0 0 24 24',
    path: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4'
  },
  'layers': {
    viewBox: '0 0 24 24',
    path: 'M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  'layout': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9h14M9 21V9'
  },
  'life-buoy': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24'
  },
  'link': {
    viewBox: '0 0 24 24',
    path: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'
  },
  'link-2': {
    viewBox: '0 0 24 24',
    path: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3M8 12h8'
  },
  'linkedin': {
    viewBox: '0 0 24 24',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M2 3.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z'
  },
  'list': {
    viewBox: '0 0 24 24',
    path: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'
  },
  'loader': {
    viewBox: '0 0 24 24',
    path: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83'
  },
  'lock': {
    viewBox: '0 0 24 24',
    path: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4M12 15v3'
  },
  'log-in': {
    viewBox: '0 0 24 24',
    path: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3'
  },
  'log-out': {
    viewBox: '0 0 24 24',
    path: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9'
  },
  'mail': {
    viewBox: '0 0 24 24',
    path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6'
  },
  'map': {
    viewBox: '0 0 24 24',
    path: 'M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16'
  },
  'map-pin': {
    viewBox: '0 0 24 24',
    path: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  },
  'maximize': {
    viewBox: '0 0 24 24',
    path: 'M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3'
  },
  'maximize-2': {
    viewBox: '0 0 24 24',
    path: 'M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7'
  },
  'menu': {
    viewBox: '0 0 24 24',
    path: 'M3 12h18M3 6h18M3 18h18'
  },
  'message-circle': {
    viewBox: '0 0 24 24',
    path: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'
  },
  'message-square': {
    viewBox: '0 0 24 24',
    path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  },
  'mic': {
    viewBox: '0 0 24 24',
    path: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8'
  },
  'mic-off': {
    viewBox: '0 0 24 24',
    path: 'M1 1l22 22M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23M12 19v4M8 23h8'
  },
  'minimize': {
    viewBox: '0 0 24 24',
    path: 'M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3'
  },
  'minimize-2': {
    viewBox: '0 0 24 24',
    path: 'M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7'
  },
  'minus': {
    viewBox: '0 0 24 24',
    path: 'M5 12h14'
  },
  'minus-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M8 12h8'
  },
  'minus-square': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M8 12h8'
  },
  'monitor': {
    viewBox: '0 0 24 24',
    path: 'M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M8 21h8M12 17v4'
  },
  'moon': {
    viewBox: '0 0 24 24',
    path: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
  },
  'more-horizontal': {
    viewBox: '0 0 24 24',
    path: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
  },
  'more-vertical': {
    viewBox: '0 0 24 24',
    path: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
  },
  'move': {
    viewBox: '0 0 24 24',
    path: 'M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20'
  },
  'music': {
    viewBox: '0 0 24 24',
    path: 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'
  },
  'navigation': {
    viewBox: '0 0 24 24',
    path: 'M3 11l19-9-9 19-2-8-8-2z'
  },
  'navigation-2': {
    viewBox: '0 0 24 24',
    path: 'M12 2 19 21 12 17 5 21 12 2z'
  },
  'octagon': {
    viewBox: '0 0 24 24',
    path: 'M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z'
  },
  'package': {
    viewBox: '0 0 24 24',
    path: 'M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12'
  },
  'paperclip': {
    viewBox: '0 0 24 24',
    path: 'M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48'
  },
  'pause': {
    viewBox: '0 0 24 24',
    path: 'M6 4h4v16H6zM14 4h4v16h-4z'
  },
  'pause-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10 8v8M14 8v8'
  },
  'pen-tool': {
    viewBox: '0 0 24 24',
    path: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586M11 11l5 5'
  },
  'percent': {
    viewBox: '0 0 24 24',
    path: 'M19 5L5 19M9 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM15 17.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'
  },
  'phone': {
    viewBox: '0 0 24 24',
    path: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
  },
  'phone-call': {
    viewBox: '0 0 24 24',
    path: 'M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
  },
  'phone-forwarded': {
    viewBox: '0 0 24 24',
    path: 'M19 1l4 4-4 4M15 5h8M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
  },
  'phone-incoming': {
    viewBox: '0 0 24 24',
    path: 'M16 2v6h6M23 1l-7 7M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
  },
  'phone-missed': {
    viewBox: '0 0 24 24',
    path: 'M23 1l-6 6M17 1l6 6M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
  },
  'phone-off': {
    viewBox: '0 0 24 24',
    path: 'M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91M23 1 1 23'
  },
  'phone-outgoing': {
    viewBox: '0 0 24 24',
    path: 'M23 7V1h-6M16 8l7-7M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z'
  },
  'pie-chart': {
    viewBox: '0 0 24 24',
    path: 'M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z'
  },
  'play': {
    viewBox: '0 0 24 24',
    path: 'M5 3l14 9-14 9V3z'
  },
  'play-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M10 8l6 4-6 4V8z'
  },
  'plus': {
    viewBox: '0 0 24 24',
    path: 'M12 5v14M5 12h14'
  },
  'plus-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 8v8M8 12h8'
  },
  'plus-square': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M12 8v8M8 12h8'
  },
  'pocket': {
    viewBox: '0 0 24 24',
    path: 'M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z M8 10l4 4 4-4'
  },
  'power': {
    viewBox: '0 0 24 24',
    path: 'M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10'
  },
  'printer': {
    viewBox: '0 0 24 24',
    path: 'M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z'
  },
  'radio': {
    viewBox: '0 0 24 24',
    path: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14'
  },
  'refresh-ccw': {
    viewBox: '0 0 24 24',
    path: 'M1 4v6h6M23 20v-6h-6 M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15'
  },
  'refresh-cw': {
    viewBox: '0 0 24 24',
    path: 'M23 4v6h-6M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'
  },
  'repeat': {
    viewBox: '0 0 24 24',
    path: 'M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3'
  },
  'rewind': {
    viewBox: '0 0 24 24',
    path: 'M11 19l-9-7 9-7v14zm11 0l-9-7 9-7v14z'
  },
  'rotate-ccw': {
    viewBox: '0 0 24 24',
    path: 'M1 4v6h6 M3.51 15a9 9 0 1 0 2.13-9.36L1 10'
  },
  'rotate-cw': {
    viewBox: '0 0 24 24',
    path: 'M23 4v6h-6 M20.49 15a9 9 0 1 1-2.12-9.36L23 10'
  },
  'rss': {
    viewBox: '0 0 24 24',
    path: 'M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
  },
  'save': {
    viewBox: '0 0 24 24',
    path: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z M17 21v-8H7v8M7 3v5h8'
  },
  'scissors': {
    viewBox: '0 0 24 24',
    path: 'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'
  },
  'send': {
    viewBox: '0 0 24 24',
    path: 'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z'
  },
  'server': {
    viewBox: '0 0 24 24',
    path: 'M2 2h20v8H2zM2 14h20v8H2zM6 6h.01M6 18h.01'
  },
  'share': {
    viewBox: '0 0 24 24',
    path: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13'
  },
  'share-2': {
    viewBox: '0 0 24 24',
    path: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98'
  },
  'shield': {
    viewBox: '0 0 24 24',
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  },
  'shield-off': {
    viewBox: '0 0 24 24',
    path: 'M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38M1 1l22 22'
  },
  'shopping-bag': {
    viewBox: '0 0 24 24',
    path: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18M16 10a4 4 0 0 1-8 0'
  },
  'shopping-cart': {
    viewBox: '0 0 24 24',
    path: 'M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
  },
  'shuffle': {
    viewBox: '0 0 24 24',
    path: 'M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5'
  },
  'sidebar': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 3v18'
  },
  'skip-back': {
    viewBox: '0 0 24 24',
    path: 'M19 20 9 12l10-8v16zM5 19V5'
  },
  'skip-forward': {
    viewBox: '0 0 24 24',
    path: 'M5 4l10 8-10 8V4zm14 1v14'
  },
  'slack': {
    viewBox: '0 0 24 24',
    path: 'M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z'
  },
  'slash': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM4.93 4.93l14.14 14.14'
  },
  'sliders': {
    viewBox: '0 0 24 24',
    path: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6'
  },
  'smartphone': {
    viewBox: '0 0 24 24',
    path: 'M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 18h.01'
  },
  'speaker': {
    viewBox: '0 0 24 24',
    path: 'M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM12 16a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'
  },
  'square': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z'
  },
  'stop-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M9 9h6v6H9z'
  },
  'sun': {
    viewBox: '0 0 24 24',
    path: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41'
  },
  'sunrise': {
    viewBox: '0 0 24 24',
    path: 'M17 18a5 5 0 0 0-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h22M16.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4'
  },
  'sunset': {
    viewBox: '0 0 24 24',
    path: 'M17 18a5 5 0 0 0-10 0M12 9V2M4.22 10.22l1.42 1.42M1 18h22M16.36 11.64l1.42-1.42M23 22H1M16 5l-4 4-4-4'
  },
  'tablet': {
    viewBox: '0 0 24 24',
    path: 'M12 18h.01M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z'
  },
  'tag': {
    viewBox: '0 0 24 24',
    path: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01'
  },
  'target': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
  },
  'terminal': {
    viewBox: '0 0 24 24',
    path: 'M4 17l6-6-6-6M12 19h8'
  },
  'thermometer': {
    viewBox: '0 0 24 24',
    path: 'M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z'
  },
  'thumbs-down': {
    viewBox: '0 0 24 24',
    path: 'M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'
  },
  'thumbs-up': {
    viewBox: '0 0 24 24',
    path: 'M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'
  },
  'toggle-left': {
    viewBox: '0 0 24 24',
    path: 'M16 5H8a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zM8 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  },
  'toggle-right': {
    viewBox: '0 0 24 24',
    path: 'M16 5H8a5 5 0 0 0 0 10h8a5 5 0 0 0 0-10zM16 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'
  },
  'trash': {
    viewBox: '0 0 24 24',
    path: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6'
  },
  'trash-2': {
    viewBox: '0 0 24 24',
    path: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6'
  },
  'trello': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 7h3v9H7V7zm7 0h3v5h-3V7z'
  },
  'trending-down': {
    viewBox: '0 0 24 24',
    path: 'M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6'
  },
  'trending-up': {
    viewBox: '0 0 24 24',
    path: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6'
  },
  'triangle': {
    viewBox: '0 0 24 24',
    path: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'
  },
  'truck': {
    viewBox: '0 0 24 24',
    path: 'M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM17.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'
  },
  'tv': {
    viewBox: '0 0 24 24',
    path: 'M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM17 2l-5 5-5-5'
  },
  'type': {
    viewBox: '0 0 24 24',
    path: 'M4 7V4h16v3M9 20h6M12 4v16'
  },
  'umbrella': {
    viewBox: '0 0 24 24',
    path: 'M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7'
  },
  'underline': {
    viewBox: '0 0 24 24',
    path: 'M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M4 21h16'
  },
  'unlock': {
    viewBox: '0 0 24 24',
    path: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 9.9-1'
  },
  'upload': {
    viewBox: '0 0 24 24',
    path: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12'
  },
  'upload-cloud': {
    viewBox: '0 0 24 24',
    path: 'M16 16l-4-4-4 4M12 12v9M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'
  },
  'user': {
    viewBox: '0 0 24 24',
    path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'
  },
  'user-check': {
    viewBox: '0 0 24 24',
    path: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12.5 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17 11l2 2 4-4'
  },
  'user-minus': {
    viewBox: '0 0 24 24',
    path: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12.5 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 11h-6'
  },
  'user-plus': {
    viewBox: '0 0 24 24',
    path: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12.5 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM20 8v6M17 11h6'
  },
  'user-x': {
    viewBox: '0 0 24 24',
    path: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M12.5 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM18 8l5 5M23 8l-5 5'
  },
  'users': {
    viewBox: '0 0 24 24',
    path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'
  },
  'video': {
    viewBox: '0 0 24 24',
    path: 'M23 7l-7 5 7 5V7zM14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z'
  },
  'video-off': {
    viewBox: '0 0 24 24',
    path: 'M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10M1 1l22 22'
  },
  'voicemail': {
    viewBox: '0 0 24 24',
    path: 'M5.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M18.5 16a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M5.5 16h13'
  },
  'volume': {
    viewBox: '0 0 24 24',
    path: 'M11 5L6 9H2v6h4l5 4V5z'
  },
  'volume-1': {
    viewBox: '0 0 24 24',
    path: 'M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07'
  },
  'volume-2': {
    viewBox: '0 0 24 24',
    path: 'M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07'
  },
  'volume-x': {
    viewBox: '0 0 24 24',
    path: 'M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6'
  },
  'watch': {
    viewBox: '0 0 24 24',
    path: 'M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M12 9v3l1.5 1.5M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83'
  },
  'wifi': {
    viewBox: '0 0 24 24',
    path: 'M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01'
  },
  'twitter': {
    viewBox: '0 0 24 24',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
  },
  'wifi-off': {
    viewBox: '0 0 24 24',
    path: 'M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.58 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01'
  },
  'wind': {
    viewBox: '0 0 24 24',
    path: 'M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2'
  },
  'x': {
    viewBox: '0 0 24 24',
    path: 'M18 6L6 18M6 6l12 12'
  },
  'x-circle': {
    viewBox: '0 0 24 24',
    path: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M15 9l-6 6M9 9l6 6'
  },
  'x-square': {
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 9l6 6M15 9l-6 6'
  },
  'x-octagon': {
    viewBox: '0 0 24 24',
    path: 'M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6'
  },
  'youtube': {
    viewBox: '0 0 24 24',
    path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z'
  },
  'zap': {
    viewBox: '0 0 24 24',
    path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  },
  'zap-off': {
    viewBox: '0 0 24 24',
    path: 'M12.41 6.75L13 2l-2.43 2.92M18.57 12.91L21 10h-5.34M8 8l-5 6h9l-1 8 5-6M1 1l22 22'
  },
  'zoom-in': {
    viewBox: '0 0 24 24',
    path: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35M11 8v6M8 11h6'
  },
  'zoom-out': {
    viewBox: '0 0 24 24',
    path: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35M8 11h6'
  },
  'search': {
    viewBox: '0 0 24 24',
    path: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm10 2-4.35-4.35'
  },
  'settings': {
    viewBox: '0 0 24 24',
    path: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'
  },
  'star': {
    viewBox: '0 0 24 24',
    path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  }
};
