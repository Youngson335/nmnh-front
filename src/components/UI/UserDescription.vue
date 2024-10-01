<template>
  <div class="users">
    <div class="user__start">
      <div class="user__item">
        <div class="user__name">
          <h3>Ivan Petrov</h3>
        </div>
        <div class="user__description">
          <p>
            Ivan Petrov is a versatile Russian software developer with extensive
            expertise across various programming languages and platforms. He
            specializes in Flutter, Swift, and Kotlin, making him highly skilled
            in building cross-platform mobile applications for both Android and
            iOS. Ivan’s ability to work with a wide range of technologies allows
            him to deliver efficient and robust software solutions tailored to
            client needs. In addition to his programming skills, Ivan has a keen
            understanding of UI/UX design, which gives him a unique edge in
            creating user-friendly and visually appealing applications. His deep
            knowledge of design principles ensures seamless integration between
            aesthetics and functionality, providing a holistic approach to app
            development. With a commitment to staying updated with the latest
            trends and innovations in the tech industry, Ivan is a highly
            sought-after developer who blends technical proficiency with
            creative insight, making him an asset in any development team.
          </p>
        </div>
      </div>
    </div>
    <div class="user__end">
      <div class="user__item">
        <div class="user__name">
          <h3>Alexander Sokolov</h3>
        </div>
        <div class="user__description">
          <p>
            Alexander Sokolov is a highly adaptable software engineer from
            Russia, proficient in Node.js, Python, Java, and Unity. With years
            of experience in both back-end and front-end development, he is
            known for his ability to tackle complex systems, crafting scalable
            and efficient solutions for diverse industries. Alexander’s
            expertise in Node.js and Python allows him to build fast,
            high-performance server-side applications, while his knowledge of
            Java brings an added layer of versatility, especially in
            enterprise-level environments. His skills extend beyond traditional
            software development into the realm of game development, where he
            applies his deep understanding of Unity to create immersive,
            interactive experiences. A problem-solver by nature, Alexander
            thrives in dynamic, fast-paced environments, where he continually
            pushes the boundaries of what’s possible. His blend of technical and
            creative skills has earned him recognition as a forward-thinking
            developer, consistently delivering solutions that drive innovation.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.users {
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 124px;
}
.user {
  &__end {
    display: flex;
    justify-content: end;
    & .user__name {
      text-align: end;
      width: 100%;
    }
  }
  &__item {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    max-width: 467px;
    text-align: start;
  }
  &__name {
    & h3 {
      padding: 27px 0px;
      font-size: 29.6px;
      font-weight: 700;
      line-height: 35.52px;
    }
  }
  &__description {
    & p {
      color: #8b8b8b;
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
    }
  }
}
</style>
