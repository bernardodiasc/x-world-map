import Markdown from 'markdown-to-jsx'
import { format } from 'date-fns'

import * as styles from './EventCard.module.css'

const EventCard = ({ item, inAccordion }) => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>
        <svg viewBox="0 0 100 100" width="32px" height="32px">
          <path d="M16.5,85C10.71,85,6,80.29,6,74.5V61c0-3.584,2.916-6.5,6.5-6.5c1.378,0,2.5-1.122,2.5-2.5 s-1.122-2.5-2.5-2.5C8.916,49.5,6,46.584,6,43V27.5C6,21.71,10.71,17,16.5,17h51.328c1.127,0,2.217,0.298,3.172,0.834 C71.955,17.298,73.045,17,74.172,17H87.5C93.29,17,98,21.71,98,27.5v16c0,3.584-2.916,6.5-6.5,6.5c-1.378,0-2.5,1.122-2.5,2.5 s1.122,2.5,2.5,2.5c3.584,0,6.5,2.916,6.5,6.5v13C98,80.29,93.29,85,87.5,85H16.5z" opacity=".35" />
          <path fill="#f2f2f2" d="M14.5,83C8.71,83,4,78.29,4,72.5V59c0-3.584,2.916-6.5,6.5-6.5c1.378,0,2.5-1.122,2.5-2.5 s-1.122-2.5-2.5-2.5C6.916,47.5,4,44.584,4,41V25.5C4,19.71,8.71,15,14.5,15h71C91.29,15,96,19.71,96,25.5v16 c0,3.584-2.916,6.5-6.5,6.5c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5c3.584,0,6.5,2.916,6.5,6.5v13 C96,78.29,91.29,83,85.5,83H14.5z" />
          <path fill="#ffc571" d="M89.5,41.5v-16c0-2.209-1.791-4-4-4H72.065L69,23.213L66.048,21.5H15.354 c-2.681,0-4.854,2.173-4.854,4.854V41c4.971,0,9,4.029,9,9c0,4.971-4.029,9-9,9v12.646c0,2.681,2.173,4.854,4.854,4.854h50.618 L69,75.039l3.975,1.461H85.5c2.209,0,4-1.791,4-4v-13c-4.971,0-9-4.029-9-9C80.5,45.529,84.529,41.5,89.5,41.5z" />
          <circle cx="69" cy="29" r="2" fill="#f2f2f2" />
          <circle cx="69" cy="37" r="2" fill="#f2f2f2" />
          <circle cx="69" cy="45" r="2" fill="#f2f2f2" />
          <circle cx="69" cy="53" r="2" fill="#f2f2f2" />
          <circle cx="69" cy="61" r="2" fill="#f2f2f2" />
          <circle cx="69" cy="69" r="2" fill="#f2f2f2" />
          <path fill="none" stroke="#40396e" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M89.5,41.5v-16 c0-2.209-1.791-4-4-4H72.172c-0.572,1.182-1.771,2.004-3.172,2.004s-2.601-0.822-3.172-2.004H14.5c-2.209,0-4,1.791-4,4V41 c4.971,0,9,4.029,9,9c0,4.971-4.029,9-9,9v13.5c0,2.209,1.791,4,4,4h51.328c0.572-1.182,1.771-2.004,3.172-2.004 s2.601,0.822,3.172,2.004H85.5c2.209,0,4-1.791,4-4v-13c-4.971,0-9-4.029-9-9C80.5,45.529,84.529,41.5,89.5,41.5z" />
        </svg>
        {item.title}
      </h2>
      {item.info && (
        <div className={styles.info}>
          <Markdown>{item.info}</Markdown>
        </div>
      )}
      <h3 className={styles.schedule}>
        <svg viewBox="0 0 100 100" width="24px" height="24px">
          <path d="M21.5,93C15.71,93,11,88.29,11,82.5v-61C11,15.71,15.71,11,21.5,11h1.682C24.125,5.886,28.617,2,34,2	c0.474,0,0.954,0.031,1.427,0.092C40.154,2.699,40.089,6.366,41,11h18.182C60.125,5.886,64.617,2,70,2	c0.474,0,0.954,0.031,1.427,0.092C76.154,2.699,76.089,6.366,77,11h5.5C88.29,11,93,15.71,93,21.5v61C93,88.29,88.29,93,82.5,93	H21.5z" opacity=".35" />
          <path fill="#f2f2f2" d="M19.5,91C13.71,91,9,86.29,9,80.5v-61C9,13.71,13.71,9,19.5,9h1.682C22.125,3.886,26.617,0,32,0	c0.474,0,0.954,0.031,1.427,0.092C38.154,0.699,41.875,4.366,42.786,9h14.396C58.125,3.886,62.617,0,68,0	c0.474,0,0.954,0.031,1.427,0.092C74.154,0.699,77.875,4.366,78.786,9H80.5C86.29,9,91,13.71,91,19.5v61C91,86.29,86.29,91,80.5,91	H19.5z" />
          <path fill="#d9eeff" d="M79.5,84.5h-59c-2.761,0-5-2.239-5-5v-59c0-2.761,2.239-5,5-5h59c2.761,0,5,2.239,5,5v59	C84.5,82.261,82.261,84.5,79.5,84.5z" />
          <path fill="#ff7575" d="M84.5,33V21.534c0-3.333-2.239-6.034-5-6.034h-59c-2.761,0-5,2.702-5,6.034V33H84.5z" />
          <path fill="none" stroke="#40396e" strokeMiterlimit="10" strokeWidth="3" d="M73,15.5h7.5c2.209,0,4,1.791,4,4v61	c0,2.209-1.791,4-4,4h-61c-2.209,0-4-1.791-4-4v-61c0-2.209,1.791-4,4-4H27" />
          <line x1="37" x2="63" y1="15.5" y2="15.5" fill="none" stroke="#40396e" strokeMiterlimit="10" strokeWidth="3" />
          <rect width="8" height="8" x="34" y="42" fill="#70bfff" />
          <rect width="8" height="8" x="46" y="42" fill="#70bfff" />
          <rect width="8" height="8" x="58" y="42" fill="#70bfff" />
          <rect width="8" height="8" x="70" y="42" fill="#70bfff" />
          <rect width="8" height="8" x="22" y="54" fill="#70bfff" />
          <rect width="8" height="8" x="34" y="54" fill="#70bfff" />
          <rect width="8" height="8" x="46" y="54" fill="#70bfff" />
          <rect width="8" height="8" x="58" y="54" fill="#70bfff" />
          <rect width="8" height="8" x="70" y="54" fill="#70bfff" />
          <rect width="8" height="8" x="22" y="66" fill="#70bfff" />
          <rect width="8" height="8" x="34" y="66" fill="#70bfff" />
          <rect width="8" height="8" x="46" y="66" fill="#70bfff" />
          <rect width="8" height="8" x="58" y="66" fill="#70bfff" />
          <path fill="#40396e" d="M29,15l0-3.83c0-1.624,1.216-3.08,2.838-3.165C33.568,7.913,35,9.289,35,11v4c0,1.105,0.895,2,2,2h1	l0-5.791c0-3.049-2.186-5.77-5.21-6.158C29.131,4.581,26,7.432,26,11v6h1C28.105,17,29,16.105,29,15z" />
          <path fill="#40396e" d="M65,15l0-3.83c0-1.624,1.216-3.08,2.838-3.165C69.568,7.913,71,9.289,71,11v4c0,1.105,0.895,2,2,2h1	v-5.791c0-3.049-2.186-5.77-5.21-6.158C65.131,4.581,62,7.432,62,11v6h1C64.105,17,65,16.105,65,15z" />
          <circle cx="32" cy="24" r="5" fill="#40396e" />
          <circle cx="68" cy="24" r="5" fill="#40396e" />
          <path fill="#d9eeff" d="M32,27c-1.657,0-3-1.343-3-3V11c0-1.657,1.343-3,3-3s3,1.343,3,3v13C35,25.657,33.657,27,32,27z" />
          <path fill="#d9eeff" d="M68,27c-1.657,0-3-1.343-3-3V11c0-1.657,1.343-3,3-3s3,1.343,3,3v13C71,25.657,69.657,27,68,27z" />
        </svg>
        Schedule:
      </h3>
      {item.locations.map(location => {
        const since = new Date(location.since)
        const until = new Date(location.until)
        return (
          <div
            key={`event-location-${location.id}`}
            className={styles.location}
          >
            <div className={item.location.id === location.id ? styles.selected : ''}>
              <div className={styles.dates}>
                {location.since && (
                  <div className={styles.date}>
                    <div className={styles.dateLabel}>Start:</div>
                    <div className={styles.day}>{format(since, 'dd')}</div>
                    <div className={styles.month}>{format(since, 'MMMM')}</div>
                    <div className={styles.year}>{format(since, 'yyyy')}</div>
                  </div>
                )}
                {location.until && (
                  <div className={styles.date}>
                    <div className={styles.dateLabel}>End:</div>
                    <div className={styles.day}>{format(until, 'dd')}</div>
                    <div className={styles.month}>{format(until, 'MMMM')}</div>
                    <div className={styles.year}>{format(until, 'yyyy')}</div>
                  </div>
                )}
              </div>
              <div className={styles.details}>
                {location.country && (
                  <div className={styles.detailsRow}>
                    <b>Country:</b> {location.country}
                  </div>
                )}
                {location.city && (
                  <div className={styles.detailsRow}>
                    <b>City:</b> {location.city}
                  </div>
                )}
                {location.address && (
                  <div className={styles.detailsRow}>
                    <b>Address:</b> {location.address}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default EventCard
