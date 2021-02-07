<template>
  <div class="container">
    <h1 class="title">Список задач</h1>
    <form class="form" @submit.prevent="addTodo">
      <div class="form__control">
        <label class="form__item" for="name">Название задачи</label>
        <input
          class="form__item"
          type="text"
          id="name"
          v-model="name"
          placeholder="Введите название новой задачи"
        />
      </div>

      <div class="form__control">
        <label class="form__item" for="desc">Описание задачи</label>
        <input
          class="form__item"
          type="text"
          id="desc"
          v-model="description"
          placeholder="Введите описание новой задачи"
        />
      </div>
      <button class="form__item button" type="submit">Добавить</button>
    </form>

    <div v-if="isLoading" class="loading"><h2>Loading...</h2></div>
    <div v-else class="table">
      <div class="table__controls">
        <div class="table__col table__search">
          <input
            class="form__item"
            type="text"
            placeholder="Поиск задач"
            v-model.trim="substring"
            @input="search"
          />
        </div>
        <div class="table__col">
          <button class="button no-margin" type="submit" @click="filter">
            Фильтр A-z
          </button>
        </div>
      </div>

      <div class="table__row table__title">
        <div class="table__col">Выполнено</div>
        <div class="table__col">Порядок</div>
        <div class="table__col">Название задачи</div>
        <div class="table__col">Описание задачи</div>
      </div>

      <div
        ref="tableRow"
        :data-matched="todo.matched"
        class="table__row"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <div class="table__col">
          <input
            id="completed"
            class="table__input custom-checkbox"
            type="checkbox"
            :value="todo.description"
            v-model="toDelete"
            @change="completed(index)"
          />
          <label for="completed"></label>
        </div>
        <div class="table__col">
          <span class="table__order">{{ index + 1 }}.</span>
        </div>
        <div class="table__col">
          <span class="table__text">{{ todo.name }}</span>
        </div>
        <div class="table__col">
          <span class="table__text">{{ todo.description }}</span>
        </div>
      </div>
      <button class="button button--done" type="button" @click="deleteTodo">
        Выполнено
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      name: '',
      description: '',
      todos: [],
      srcTodos: [],
      toDelete: [],
      isLoading: true,
      substring: '',
      sorted: false
    }
  },
  methods: {
    addTodo() {
      const todo = {}
      if (this.description && this.name) {
        todo.description = this.description
        todo.name = this.name
        todo.completed = false
        todo.matched = false
      } else {
        return
      }
      this.todos.push(todo)
      this.srcTodos = this.todos.slice()
      this.sorted = false
      this.name = ''
      this.description = ''
    },
    deleteTodo() {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.toDelete = []
    },
    completed(idx) {
      this.todos[idx].completed = !this.todos[idx].completed
    },
    search() {
      console.log(this.substring)
      if (this.substring) {
        // если в поисковой строке есть что-то
        this.todos.forEach(todo => {
          if (
            todo.name.toLowerCase().includes(this.substring.toLowerCase()) ||
            todo.description
              .toLowerCase()
              .includes(this.substring.toLowerCase())
          ) {
            // если поисковая строка совпадает с данными из таблицы
            todo.matched = true
            setTimeout(() => {
              this.$refs.tableRow.forEach(row => {
                if (row.dataset.matched) row.style.display = ''
                else row.style.display = 'none'
              })
            }, 0)
          } else {
            // если поисковая строка НЕ совпадает с данными из таблицы
            todo.matched = false
            setTimeout(() => {
              this.$refs.tableRow.forEach(row => {
                if (!row.dataset.matched) row.style.display = 'none'
              })
            }, 0)
          }
        })
      } else {
        // если в поисковой строке НИЧЕГО НЕТ
        this.todos.forEach(todo => {
          todo.matched = false
          setTimeout(() => {
            this.$refs.tableRow.forEach(row => (row.style.display = ''))
          }, 0)
        })
      }
    },
    filter() {
      console.log('a')
      this.sorted = !this.sorted
      const sortedTodos = this.todos.slice().sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() === b.name.toLowerCase()) return 0
      })

      this.sorted ? (this.todos = sortedTodos) : (this.todos = this.srcTodos)
    }
  },
  mounted() {
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    const fakeAsync = delay(10)
    fakeAsync.then(() => {
      this.todos = [
        {
          name: 'Products',
          description: 'Buy milk',
          completed: false,
          matched: false
        },
        {
          name: 'Frontend',
          description: 'Vue.js',
          completed: false,
          matched: false
        },
        {
          name: 'Backend',
          description: 'Node',
          completed: false,
          matched: false
        },
        {
          name: 'Hobby',
          description: 'Guitar',
          completed: false,
          matched: false
        }
      ]

      this.srcTodos = this.todos.slice()
      this.isLoading = false
    })
  }
}
</script>
