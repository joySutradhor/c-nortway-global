import Banner from '@/app/_components/Banner/Banner'
import BlogList from '@/app/_components/Blogs/Blogs'

import ApplicationProcess from '@/app/_components/StudyDestinationCmp/ApplicationProcess/ApplicationProcess'
import Careers from '@/app/_components/StudyDestinationCmp/Careers/Careers'
import EducationCost from '@/app/_components/StudyDestinationCmp/EducationCost/EducationCost'
import FaqArea from '@/app/_components/StudyDestinationCmp/FaqArea/FaqArea'
import AtAGlance from '@/app/_components/StudyDestinationCmp/Glance/Glance'
import PopularUniversities from '@/app/_components/StudyDestinationCmp/PopularUniversities/PopularUniversities'
import WhyStudy from '@/app/_components/StudyDestinationCmp/WhyStudy/WhyStudy'
import Testimonial from '@/app/_components/Testimonial/Testimonial'


export default function page () {
  const studyAbroadData = [
    {
      id: 1,
      tooltipText: ' Study In USA',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/irelandWhyStudy.jpg',
      title: 'Why Study ',
      colorText: 'in USA?',
      description:
        'We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their lives. We deploy cutting-edge technologies on the Northway platform to simplify students international education journeys. We blend technology and innovation to transform the higher education landscape with institutions, partners, and industry stakeholders.',
      quickFactsTitle: 'Quick Facts',
      quickFacts: [
        { id: 1, text: 'Expert Guidance.' },
        { id: 2, text: 'Seamless Transitions.' },
        { id: 3, text: 'Study Abroad Success.' },
        { id: 4, text: 'Academic Excellence.' }
      ]
    }
  ]
  const educationCostData = [
    {
      id: 1,
      tooltipText: 'Education Cost',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/cost.webp',
      title: 'Cost of ',
      colorText: 'Education',
      description:
        'Tuition fees vary based on the state, the university funding model, and the student’s country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board, they’ve rendered an estimate of last year’saverage tuition costs, which will roughly reflect the next few years.',
      quickFactsTitle: 'Quick Facts',
      quickFacts: [
        { id: 1, text: 'Total Expenses 41535' },
        { id: 2, text: 'Tuition Fees for one-year (Indicative) 25000 .' },
        { id: 3, text: 'Living and Accommodation 15000.' },
        { id: 4, text: 'Airfare from India to USA 1000.' },
        { id: 5, text: 'Visa Fees (Visa & SEVIS) 535.' }
      ]
    }
  ]
  const careersData = [
    {
      id: 1,
      tooltipText: ' Careers',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/irelandCareer.jpg',
      title: 'Careers ',
      colorText: '& Industry',
      description:
        'One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income &wealth, health status, jobs and earnings, education & skills and environmental quality.'
    }
  ]

  const glanceData = [
    {
      id: 1,
      factor: 'Average tuition fees (per year)',
      value: [
        "Bachelor's degree - $10,000-$55,000",
        "Master's degree - $15,000-$60,000"
      ]
    },
    {
      id: 2,
      factor: 'Duration',
      value: [
        "Bachelor's degree - 3-4 years",
        "Master's degree - 1-2 years",
        'Ph.D. - 6 years'
      ]
    },
    {
      id: 3,
      factor: 'Eligibility criteria',
      value: [
        "Academic credentials - High school completion, Bachelor's or Master's degree in related fields.",
        'Documents - Passport, Student visa (F, M, or J) for USA, LOR',
        'Test scores - GMAT/GRE, IELTS/TOEFL/PTE'
      ]
    },
    {
      id: 4,
      factor: 'Popular courses',
      value: [
        'Nursing',
        'Engineering',
        'MSc Computer Science',
        'Business Management'
      ]
    },
    {
      id: 5,
      factor: 'Student visa fees (F, M, and J visas)',
      value: ['$185 (Application fee)']
    }
  ]

  const universities = [
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/uni1-66db36043eb12.webp',
      name: 'University of Connecticut'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/uni2-66db364355225.webp',
      name: 'Arizona State University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/uni3-66db368f59e38.webp',
      name: 'University of California'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/columbia.webp',
      name: 'Columbia University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/priceton.webp',
      name: 'Princeton University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/harvard.webp',
      name: 'Harvard University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/yale.webp',
      name: 'Yale University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/stanford.webp',
      name: 'Stanford University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/nyu.jpg',
      name: 'Nyc University'
    }
  ]

  return (
    <div>
      <div>
        <Banner
          colorText='Study In'
          text='Usa'
          url={
            'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/usa.png'
          }
          des='We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their lives. We deploy cutting-edge technologies on the Northway platform to simplify students international education journeys. We blend technology and innovation to transform the higher education landscape with institutions, partners, and industry stakeholders.'
        />
      </div>
      <ApplicationProcess />
      <WhyStudy studyAbroadData={studyAbroadData} />
      <Careers careersData={careersData} />
      <PopularUniversities universities={universities} />
      <EducationCost educationCostData={educationCostData} />
      <AtAGlance glanceData={glanceData} colorText='Usa' />
      <Testimonial />
      <FaqArea />
      <BlogList/>
    </div>
  )
}
