<template>
  <div class="flex gap-2">
    <PUButton
      flavor="outlined"
      icon-left="arrow-down"
    >
      Button
    </PUButton>
    <PUButton
      icon-left="arrow-down"
    >
      Button
    </PUButton>
    <PUButton>
      Button
    </PUButton>
    <PUButton
      flavor="outlined"
    >
      Button
    </PUButton>
    <PUButton
      flavor="ghost"
    >
      Button
    </PUButton>
    <PUButton
      disabled
    >
      Button
    </PUButton>
    <PUButtonIcon name="arrow-down" />
    <PUButtonIcon
      name="arrow-down"
      flavor="outlined"
    />
    <PUButtonIcon
      name="arrow-down"
      flavor="ghost"
    />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Itim&family=Patrick+Hand&display=swap");

* {
  font-family: "Patrick Hand", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
