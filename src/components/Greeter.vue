<script>
export default {
  name: 'greeter',
  props: ['fullName'],
  render(h) {
    return h('span', {}, `Hi ${this.fullName}`)
  }
}
</script>