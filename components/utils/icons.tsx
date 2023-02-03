interface IconProps {
  className: string
}

export const IssueIcon = (props: IconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' {...props}>
    <title>{'Gala icon set'}</title>
    <circle
      style={{
        fill: 'none',
        stroke: '#000',
        strokeWidth: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeOpacity: 1
      }}
      cx={8}
      cy={8}
      r={7}
    />
    <circle
      style={{
        fill: 'none',
        stroke: '#000',
        strokeWidth: 1,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeOpacity: 1
      }}
      cx={8}
      cy={8}
      r={2}
    />
  </svg>
)

export const TrackIcon = (props: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM12 17.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM17.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z'
      fill='#000'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z'
      fill='#BFBFBF'
    />
    <path
      d='M12 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z'
      fill='#000'
    />
  </svg>
)
