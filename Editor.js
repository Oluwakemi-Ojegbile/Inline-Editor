new Vue({
     el: '#main-body',

    data: {
        show_Editor: false,
        input_content: 'Edit me.'
    },

    methods: {
        hideEditor: function(){
            this.show_Editor = false;
        },
        toggleEditor: function(){
            this.show_Editor = !this.show_Editor;
        }
    }
});