'use client'

'use client'
export default function NameGreeting() {
    // good morning, good afternoon, good evening
    const date = new Date()
    const hours = date.getHours()
    const name = "John"
    let greeting = ""
    if (hours < 12) {
        greeting = "Good morning"
    } else if (hours < 18) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }
    return `${greeting}`
}