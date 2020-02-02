<template>
  <div id="app">
    <img src="./assets/max_logo.png">

    <survey :survey="survey"></survey>

  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import * as SurveyKo from "survey-knockout";
import "bootstrap/dist/css/bootstrap.css";

const Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

import * as widgets from "surveyjs-widgets";
import "inputmask/dist/inputmask/phone-codes/phone.js";
import questions from './assets/questions'

import { init as customWidget } from "./customwidget";

widgets.icheck(SurveyVue);
widgets.select2(SurveyVue);
widgets.inputmask(SurveyVue);
widgets.jquerybarrating(SurveyVue);
widgets.jqueryuidatepicker(SurveyVue);
widgets.nouislider(SurveyVue);
widgets.select2tagbox(SurveyVue);
widgets.signaturepad(SurveyVue);
widgets.sortablejs(SurveyVue);
widgets.ckeditor(SurveyVue);
widgets.autocomplete(SurveyVue);
widgets.bootstrapslider(SurveyVue);
customWidget(SurveyVue);

SurveyVue.Serializer.addProperty("question", "tag:number");
SurveyKo.Serializer.addProperty("question", "tag:number");

export default {
  name: "app",
  components: {
    Survey
  },
  data() {
    const model = new SurveyVue.Model(questions);
    return {
      survey: model
    };
  },
  methods: {
    async init(){
      await this.survey.onComplete.add(async (result) => {
        const data = this.survey.data;
        console.log(data)
        await fetch('http://localhost:8080', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
      })
    }
  },
  created () {
    this.init();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

img {
  margin: 0 auto;
  display: block;
}
</style>
