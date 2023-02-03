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
