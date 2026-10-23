import { bookingUrl } from '../data/site'

const stats = [
  { value: '6+', label: 'Years of Experience' },
  { value: '100+', label: 'Clients Served' },
  { value: '10+', label: 'Students Trained' },
]

export default function ExperienceStats() {
  return (
    <section className="bg-off-white p-4 pb-12 md:px-10">
      <div className="mx-auto max-w-2xl text-center">
        {/* <h2 className="font-heading text-[28px] leading-snug text-espresso md:text-[34px]">
          Real Experience, Real Results
        </h2> */}

        <div className="border-t border-espresso/20">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-espresso/20 py-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso">
                {stat.value} {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block cursor-pointer border border-espresso px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-espresso transition-colors hover:bg-espresso hover:text-off-white motion-reduce:transition-none"
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}