const ical = require('ical-generator');
const moment = require('moment')



const content = ical({
    domain: 'google.com',
    method: 'REQUEST',
    prodId: '//Google Inc//Google Calendar 70.9054//EN',
    events: [{
        start: moment(),
        status: 'CONFIRMED',
        end: moment().add(10, 'hour'),
        summary: 'Eat, Play and more Fun!',
        transparency: 'OPAQUE',
        organizer: {
            name: 'Jonathan Mwaniki',
            email: `jonatskin@gmail.com`,
            mailto: `caleb.baraka@thejitu.com, joan.wanini@thejitu.com, joseph.ndengwa@thejitu.com`,
        },
        location: 'Othaya',
        attendees: [{
                email: 'my-email-address@gmail.com',
                name: 'John Doe',
                status: 'NEEDS-ACTION',
                rsvp: true,
                type: 'INDIVIDUAL',
                role: 'REQ-PARTICIPANT'
            },
            {
                email: 'mno@gmail.com',
                name: 'Jane Doe',
                status: 'NEEDS-ACTION',
                type: 'INDIVIDUAL',
                role: 'REQ-PARTICIPANT'
            },
            {
                email: 'xyz@gmail.com',
                name: 'Felix Doe',
                status: 'NEEDS-ACTION',
                type: 'INDIVIDUAL',
                role: 'REQ-PARTICIPANT'
            }

        ]
    }]
}).toString();
module.exports = content;