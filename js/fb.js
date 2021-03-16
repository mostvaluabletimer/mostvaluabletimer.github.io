window.addEventListener('load', fbPgLk, false);
let fbpg = document.getElementById('fbpg');

function fbPgLk() {
  if (screenWidth >1023 && document.body.scrollWidth > 1023) {
    fbpg.innerHTML = '<div class="fb-page" data-href="https://www.facebook.com/mostvaluabletimer" data-tabs="timeline" data-width="" data-height="70" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/mostvaluabletimer" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/mostvaluabletimer">MVT • Most Valuable Timer</a></blockquote></div>';
  }else {
    fbpg.innerHTML = '<div class="fb-page" data-href="https://www.facebook.com/mostvaluabletimer" data-tabs="timeline" data-width="280" data-height="70" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/mostvaluabletimer" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/mostvaluabletimer">MVT • Most Valuable Timer</a></blockquote></div>';
  }
}
