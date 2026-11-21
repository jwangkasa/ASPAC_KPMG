import DomainDetailSlide from './DomainDetailSlide'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideCXDetail(props: Props) {
  return <DomainDetailSlide domain="cx" {...props} />
}
