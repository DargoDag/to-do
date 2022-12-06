const App = {
  data() {
    return {
      placeholderValue: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: [
        'Выучить Vue js',
        'Постичь дзен',
        'Понять, что ничего не понял',
        'Повторить все с первого шага'
      ]
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    doubleCount() {
      return this.notes.length * 2
    }
  }
}

Vue.createApp(App).mount('#app')