import Vue from 'vue';

Vue.filter("removeOptionString", (value, arg) => {
    let txt = "";
    arg.options.forEach((v, i) => {
        if (arg.selectedOptions.indexOf(v.id) != -1) {
            if (i <= 0) {
                txt = txt + v.option_text;
            } else {
                txt = txt + ", " + v.option_text;
            }
        }
    });
    return value.replace('*option*', txt);
});
Vue.filter("customTime", (value) => {
    return Vue.moment(value, "HH:mm").format('LT');
});
Vue.filter("removeStringClient", (val, arg) => {
    let keyword_obj = arg.find(x => x.status == 1);
    return val.replace('client', keyword_obj.name);
});