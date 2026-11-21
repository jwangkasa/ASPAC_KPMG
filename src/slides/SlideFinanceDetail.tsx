import DomainDetailSlide from './DomainDetailSlide'

interface Props {
  onPrev?: () => void
  onNext?: () => void
  onNavigate?: (slideNumber: number) => void
  hasPrev?: boolean
  hasNext?: boolean
}

export default function SlideFinanceDetail(props: Props) {
  return <DomainDetailSlide domain="finance" {...props} />
}
