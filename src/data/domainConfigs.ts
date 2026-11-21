import financeDiagram from '../assets/autonomous_finance_diagram.png'
import spendDiagram from '../assets/autonomous_spend_diagram.png'
import scmDiagram from '../assets/autonomous_scm_diagram.png'
import hcmDiagram from '../assets/autonomous_hcm_diagram.png'
import cxDiagram from '../assets/autonomous_cx_diagram.png'

export type DomainKey = 'finance' | 'spend' | 'scm' | 'hcm' | 'cx'

export interface DomainConfig {
  key: DomainKey
  title: string
  fullName: string
  slideNumber: number
  diagram: string
  alt: string
  prevSlideNumber: number
  prevLabel: string
  nextSlideNumber: number
  nextLabel: string
}

export const DOMAIN_CONFIGS: Record<DomainKey, DomainConfig> = {
  finance: {
    key: 'finance',
    title: 'Finance',
    fullName: 'Autonomous Finance',
    slideNumber: 5,
    diagram: financeDiagram,
    alt: 'Autonomous Finance - End-to-End Process Assistants, Agents, and Core Impact',
    prevSlideNumber: 5,
    prevLabel: '‹ Autonomous Suite (Slide 5)',
    nextSlideNumber: 6,
    nextLabel: 'Autonomous Spend ›',
  },
  spend: {
    key: 'spend',
    title: 'Spend',
    fullName: 'Autonomous Spend',
    slideNumber: 5,
    diagram: spendDiagram,
    alt: 'Autonomous Spend - End-to-End Process Assistants, Agents, and Core Impact',
    prevSlideNumber: 5,
    prevLabel: '‹ Autonomous Finance',
    nextSlideNumber: 7,
    nextLabel: 'Autonomous SCM ›',
  },
  scm: {
    key: 'scm',
    title: 'SCM',
    fullName: 'Autonomous SCM',
    slideNumber: 5,
    diagram: scmDiagram,
    alt: 'Autonomous SCM - End-to-End Process Assistants, Agents, and Core Impact',
    prevSlideNumber: 5,
    prevLabel: '‹ Autonomous Spend',
    nextSlideNumber: 8,
    nextLabel: 'Autonomous HCM ›',
  },
  hcm: {
    key: 'hcm',
    title: 'HCM',
    fullName: 'Autonomous HCM',
    slideNumber: 5,
    diagram: hcmDiagram,
    alt: 'Autonomous HCM - End-to-End Process Assistants, Agents, and Core Impact',
    prevSlideNumber: 5,
    prevLabel: '‹ Autonomous SCM',
    nextSlideNumber: 9,
    nextLabel: 'Autonomous CX ›',
  },
  cx: {
    key: 'cx',
    title: 'CX',
    fullName: 'Autonomous CX',
    slideNumber: 5,
    diagram: cxDiagram,
    alt: 'Autonomous CX - End-to-End Process Assistants, Agents, and Core Impact',
    prevSlideNumber: 5,
    prevLabel: '‹ Autonomous HCM',
    nextSlideNumber: 6,
    nextLabel: 'Industry AI (Slide 6) ›',
  },
}
