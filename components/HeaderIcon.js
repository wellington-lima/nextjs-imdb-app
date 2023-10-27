import { BeakerIcon } from '@heroicons/react/24/solid'

export default function HeaderIcon({Icon, title}) {
  return(
    <div>
      <Icon className="h-8" />
      <p>{title}</p>
    </div>
  )
}
