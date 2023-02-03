import clsx from 'clsx'
import { TrackIcon } from './icons'

interface AuthGithubBtnProps {
  isHover: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}
export const AuthGithubBtn = (props: AuthGithubBtnProps) => {
  const { isHover, onMouseEnter, onMouseLeave } = props

  return (
    <button
      className={clsx(
        'relative w-48 h-12 mt-[10%] border-2 border-gray-500 rounded-full overflow-hidden bg-white/30'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TrackIcon
        className={clsx(
          'absolute top-1 w-10 h-10',
          'transition-all ease-in duration-500',
          `${isHover ? 'scale-[300%] left-36' : 'left-4'}`
        )}
      />
      <span
        className={clsx(
          'absolute right-2 top-0 px-2 h-full font-bold text-xl py-[10px]',
          'transition-all ease-in duration-500',
          `${isHover ? 'translate-x-36' : ''}`
        )}
      >
        Track Issue
      </span>
      <span
        className={clsx(
          'absolute -left-24 top-0 px-2 h-full font-bold text-xl py-[10px]',
          'transition-all ease-in duration-500',
          `${isHover ? 'translate-x-32' : ''}`
        )}
      >
        Now
      </span>
    </button>
  )
}
