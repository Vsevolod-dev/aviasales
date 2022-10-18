import moment from "moment";

export function durationNormalize(minutes: number): string {
    const hours = Math.floor(minutes / 60)

    return `${hours}ч ${minutes - hours * 60}м`
}

export function stopsNormalize(stopsLength: number) {
    switch (stopsLength.toString().slice(-1)) {
        case '1':
            return `${stopsLength} пересадка`
        case '2':
        case '3':
        case '4':
            return `${stopsLength} пересадки`
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            return `${stopsLength} пересадок`
    }
}

export function dateNormalize(date: string, duration: number) {
    const begin = moment.utc(date).format('HH:mm')
    const end = moment.utc(date).add(duration, 'minutes').format('HH:mm')

    return `${begin} – ${end}`
}

window.addEventListener('scroll', (e) => {
    const filtersTransfer = document.querySelector('.filters__transfer') as HTMLElement

    if (window.scrollY > 200) {
        filtersTransfer.style.position = 'fixed'
        filtersTransfer.style.top = '25px'
    } else {
        filtersTransfer.style.position = ''
        filtersTransfer.style.top = ''
    }
})