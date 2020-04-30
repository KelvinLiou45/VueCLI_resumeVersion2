<template>
  <article>
    <div class="article_inner">
      <div class="page_area1">
        <div class="page_area1_imgBx">
          <img src="../assets/images/portfolio/cssEffect.png" alt>
        </div>
        <div class="page_area1_content">
          <div class="page_area1_content_titleEN">
            <p>CSS EFFECT</p>
          </div>
          <div class="page_area1_content_titleTC">
            <p>CSS效果練習</p>
            <p class="secTitle">透過CSS實現酷炫效果</p>
          </div>
          <div class="page_area1_content_details">
            <p>大量使用transfrom操作偽元素實現酷炫效果。使用flexbox或grid進行排版，同時使用@media實作出RWD。</p>
            <p>
              <a href="https://kelvinliou45.github.io/CssEffect/">Github Page(僅效果、不具RWD)</a>
              <br>
              <a href="https://github.com/KelvinLiou45/CssEffect_Sass">使用Sass重構後的程式(具RWD)</a>
            </p>
          </div>
        </div>
      </div>
      <div class="page_area1">
        <div class="page_area1_imgBx">
          <img src="../assets/images/portfolio/smartAngel.png" alt>
        </div>
        <div class="page_area1_content">
          <div class="page_area1_content_titleEN">
            <p>SMART ANGEL</p>
          </div>
          <div class="page_area1_content_titleTC">
            <p>記帳天使</p>
            <p class="secTitle">Android App</p>
          </div>
          <div class="page_area1_content_details">
            <p>
              大學時的專題作品，利用手機鏡頭掃描商品上的二維條碼，在資料庫中抓取對應的商品資訊，進而完成記帳的動作。(從程式、設計及美術獨自一人完成)
              <br>
            </p>
            <p>
              程式語言: Java、PHP
              <br>資料庫: mySQL、SQLite
              <br>美術工具: AI、PS
              <br>
            </p>
          </div>
        </div>
        
      </div>
       <div class="page_area1">
        <div class="page_area1_imgBx">
          <img src="../assets/images/portfolio/nonogram.jpg" alt>
        </div>
        <div class="page_area1_content">
          <div class="page_area1_content_titleEN">
            <p>NONOGRAM</p>
          </div>
          <div class="page_area1_content_titleTC">
            <p>數織 5x5</p>
            <p class="secTitle">Android App</p>
          </div>
          <div class="page_area1_content_details">
            <p>
              利用 lua、CoronaSDK完成的小品遊戲。
            </p>
            <p>
              程式語言: Lua
              <br>其他工具: CoronaSDK
              <br>美術工具: 小畫家
              <br>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
