export const constructAnimation = (cur, n, o, d, s) => {
  if (cur !== n && cur !== o) return s;
  const enter = cur === n;
  const dir = (!(d + 1) + enter) % 2;
  const res = {
    animationDirection: enter ? 'reverse' : 'normal',
    animationDelay: enter ? '.3s' : '',
    animationName: `hide${d ? `, ${dir ? 'movedown' : 'moveup'}` : ''}`,
  };
  return res;
};

export const animateDataMixin = {
  props: {
    page: {
      type: Number,
      default: 0,
    },
    direction: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      style: {},
    };
  },
};

export const animateWatcherMixin = {
  watch: {
    page: {
      handler(newPage, oldPage) {
        this.style = constructAnimation(this.current, newPage, oldPage, this.direction, this.style);
      },
      immediate: true,
    },
  },
};
// export default {
//   show,
//   direction,
//   constructAnimation
// }
