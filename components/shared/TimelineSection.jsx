import {TimelineItem} from './TimelineItem'

export function TimelineSection({timelines}) {
  return (
    <div className='flex flex-col gap-4 pt-16 text-slate-900 md:flex-row'>
      {timelines?.map((timeline, key) => {
        const {title, milestones} = timeline
        return (
          <div className='max-w-[80%] md:max-w-[50%]' key={key}>
            <div className='pb-5 font-sans text-xl font-bold'>{title}</div>

            {milestones?.map((experience, index) => (
              <div key={index}>
                <TimelineItem
                  milestone={experience}
                  isLast={milestones.length - 1 === index}
                />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
