var app = new Vue({
  el: '#app',
  data: {
    firstName: "David",
    lastName: "Pauget",
    description: "Je suis étudiant en  journalisme à l'EDJ Sciences Po, en master écriture et numérique, et je travaille en alternance à RFI.",
    photo: "Dave.png",
    twitter: "davidpauget",
    github: "DavidEDJ",
    mail: "david.pauget@sciencespo.fr",
    experiences: [{
      dateBegin: "2018",
      dateEnd: "Today",
      name: "RFI",
      title: "Journaliste multimédia",
      description: "Journaliste à la rédaction Nouveaux médias de RFI.",
      logo: "rfi.png"
    }, {
      dateBegin: "Été 2018",
      dateEnd: false,
      name: "Les Echos",
      title: "Journaliste",
      description: "Journaliste à la rubrique Services",
      logo: "echos.png"
    }, {
      dateBegin: "décembre 2017",
      dateEnd: "janvier 2018",
      name: "Le Bien Public",
      title: "Stagiaire et correspondant de presse",
      description: "Journaliste pour les pages Dijon",
      logo: "bp.png"
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "2019",
      name: "Master Journalisme",
      university: "EDJ Sciences Po",
      logo: "sp.png"
    }, {
      dateBegin: "2013",
      dateEnd: "2017",
      name: "Sciences Po Lyon",
      university: "Sciences Po Lyon",
      logo: "spl.png"
    }],
    languages: ["Anglais"],
    skills: ["Node", "VueJS", "D3js", "SCSS", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})