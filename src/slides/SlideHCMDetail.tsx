import DomainDetailSlide from './DomainDetailSlide'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideHCMDetail(props: Props) {
  return <DomainDetailSlide domain="hcm" {...props} />
}
