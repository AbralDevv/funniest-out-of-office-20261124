# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/AbralDevv/funniest-out-of-office-20261124/rank.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)
[![Reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/AbralDevv/funniest-out-of-office-20261124/reward.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)

One line of out-of-office auto-reply, the funniest I could make it:

> Out until Monday — this auto-reply read your email first and has decided we should both pretend it never arrived.

`main.ts` (Node stdlib only) writes that single line — 113 characters, no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`), and refuses to write anything longer than 140 characters.

Run it:

```sh
node main.ts
```
