import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F8B843', // #E53935
                // secondary: colors.red.lighten4, // #FFCDD2
                // accent: colors.indigo.base, // #3F51B5
            },
        },
    },
});
