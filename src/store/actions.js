export default {
  actSearchList: function(ctx, searchParam) {
    ctx.commit("mutSearchList", searchParam);
  },
  actUseState: function(ctx, useState) {
    ctx.commit("mutUseState", useState);
  }
};
