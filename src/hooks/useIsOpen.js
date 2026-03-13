import { useState, useEffect } from 'react';

export function useIsOpen() {
    const [status, setStatus] = useState({
        isOpen: false,
        label: ''
    })

    useEffect(() => {
        const check = () => {
            const now = new Date()
            const hour = now.getHours()
            const minutes = now.getMinutes()
            const time = hour * 60 + minutes

            // Open: 9:00 AM (540) to 2:00 AM next day (26*60=1560)
            // After midnight: hour 0 and 1 are still "open"
            const isOpen = time >= 540 || hour < 2
            const closingSoon =
                isOpen && (hour === 1 && minutes >= 30)

            setStatus({
                isOpen,
                label: !isOpen ? 'Opens at 9:00 AM' :
                    closingSoon ? 'Closing Soon · 2:00 AM' :
                        'Open Until 2:00 AM'
            })
        }
        check()
        const interval = setInterval(check, 60000)
        return () => clearInterval(interval)
    }, [])

    return status
}
