new Vue({
    el: '#app',
    data: {

        event: {

            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            signUptext: 'Add your name to the guest list for <em>exclusive</em> offers:',
            eventDescription: 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!'
        },
        newNameText: '',
        guestName: [],
        eventCapacity: 25,
        eventCapacityPercentage: 0

    },
    methods: {
        formSubmit() {
            if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText);
                this.newNameText = ""
                this.eventCapacityPercentage = this.guestName.length / this.eventCapacity * 100

            }
        }
    },
    computed: {
        sortf() {
            return this.guestName.sort()
        }
    }
})