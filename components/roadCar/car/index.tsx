import CarBone from './carbone'
import PoliceCarUpper from './policeUpper'
import IssueCarUpper from './issueUpper'

export const PoliceCar = () => {
  return (
    <CarBone carType='police' carUpper={<PoliceCarUpper carName='911' />} />
  )
}

export const IssueCar = () => {
  return (
    <CarBone carType='issue' carUpper={<IssueCarUpper carName='Issue' />} />
  )
}
