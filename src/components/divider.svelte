<div class="wrapper">
  <div class="plus left">
    <div class="horizontal"></div>
    <div class="vertical"></div>
  </div>
  <hr />
  <div class="plus right">
    <div class="horizontal"></div>
    <div class="vertical"></div>
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  hr {
    height: 1px;
    width: 100%;
    background-color: var(--color-gray-800);
    border: transparent;
  }
  .plus {
    .horizontal {
      width: 5px;
      height: 1px;
      position: absolute;
      background-color: var(--color-fg);
    }
    .vertical {
      width: 1px;
      height: 9px;
      position: absolute;
      background-color: var(--color-fg);
    }
  }
  .plus.left {
    .horizontal {
      top: 0px;
      left: 0px;
    }
    .vertical {
      top: -4px;
      left: -1px;
    }
  }
  .plus.right {
    .horizontal {
      top: 0px;
      right: 0px;
    }
    .vertical {
      top: -4px;
      right: -1px;
    }
  }
</style>
