new Vue({
    el: '#app',
    data: {

        event: {

            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!'
        },
        newNameText: '',
        guestName: [],
        formSubmitClass: ""

    },
    methods: {
        formSubmit() {
            if (this.newNameText.length > 0) {
                this.guestName.push(this.newNameText);
                this.newNameText = ""
                this.formSubmitClass = "submitted"
            }
        }
    }
})