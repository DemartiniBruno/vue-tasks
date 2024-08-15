<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="dropdown-button">{{ selectedOption || 'Select an option' }}</button>
    <div class="dropdown-menu" v-if="isOpen">
      <div
        class="dropdown-item"
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit('option-selected', option); // Emitir o evento para o componente pai
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 200px;
  text-align: left;
}

.dropdown-button:hover {
  background-color: #0056b3;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>
