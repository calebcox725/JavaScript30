const root_style = document.documentElement.style
const inputs = document.querySelectorAll('input');
const style_variables = {
  '--padding': '10px',
  '--blur': '0px',
  '--color': '#871E3B',
  '--background': '#3A546B'
}

Object.keys(style_variables).forEach(property => {
  root_style.setProperty(property, style_variables[property])
})

inputs.forEach(initiateInputs);

function initiateInputs(input) {
  input.addEventListener('change', handleUpdate)
  input.addEventListener('mousemove', handleUpdate)
  
  input.value = style_variables[`--${input.name}`].replace(input.dataset.sizing, "")
}

function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  const update_property = `--${this.name}`
  const update_value = `${this.value}${suffix}`
  
  root_style.setProperty(update_property, update_value)
}