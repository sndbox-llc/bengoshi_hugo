---
title: "お問い合わせ"
description: '法律相談・ご依頼に関するお問い合わせはこちら。交通事故、離婚、相続、企業法務などに関するご質問は、お電話または専用フォームよりお気軽にご連絡ください。'
---

## お問い合わせ{#inqueryTitle}

<!-- 電話カード -->
<div class="card border rounded p-4 my-5 text-center">
  <h5 class="fw-bold text-start mb-4" style="color: #5c2e10; font-family: 'Hiragino Mincho ProN', serif;">
    電話でのお問い合わせ
  </h5>

  <!-- 本文 -->
  <div style="font-family: 'Hiragino Mincho ProN', serif; color: #3d2b1f;">
    <p class="mb-2" style="font-size: 1.1rem;">ご相談ダイヤル</p>
    <p class="fw-bold mb-3" style="font-size: 2.5rem;">
      <a href="tel:0286366701" class="text-decoration-none text-dark">028-636-6701</a>
    </p>
    <p class="mb-0" style="font-size: 1rem;">受付時間　午前９：００〜午後６：００</p>
  </div>
</div>


<div id="contactForm" class="container mt-5">

  <p>
    ほたか総合法律事務所にご関心をお寄せいただき、誠にありがとうございます。<br>
    ご不明な点がございましたら、以下のフォームよりお問い合わせください。
  </p>
  <ul>
    <li>自動返信メールが届かない場合は、メールアドレスをご確認ください</li>
  </ul>

  <div class="row mb-4">
    <label for="name" class="col-md-3 col-form-label">お名前</label>
    <div class="col-md-9">
      <input type="text" id="name" class="form-control" style="width:100%" />
    </div>
  </div>

  <div class="row mb-4">
    <label for="company" class="col-md-3 col-form-label">会社名（任意）</label>
    <div class="col-md-9">
      <input type="text" id="company" class="form-control" style="width:100%"  />
    </div>
  </div>

  <div class="row mb-4">
    <label for="addr" class="col-md-3 col-form-label">ご住所</label>
    <div class="col-md-9">
      <input type="text" id="addr" class="form-control"  style="width:100%" />
    </div>
  </div>

  <div class="row mb-4">
    <label for="tel" class="col-md-3 col-form-label">電話番号</label>
    <div class="col-md-9">
      <input type="tel" id="tel" class="form-control" style="width:100%"  />
    </div>
  </div>

  <div class="row mb-4">
    <label for="mail" class="col-md-3 col-form-label">メールアドレス</label>
    <div class="col-md-9">
      <input type="email" id="mail" class="form-control" style="width:100%"  />
    </div>
  </div>

  <div class="row mb-4">
    <label for="toiawasehonbun" class="col-md-3 col-form-label">お問い合わせ内容</label>
    <div class="col-md-9">
      <textarea id="toiawasehonbun" class="form-control" rows="8" style="width:100%" ></textarea>
    </div>
  </div>

  <div class="text-center">
    <button onclick="submit()" class="btn btn-primary btn-lg">送信</button>
  </div>

  <div id="errormessage" class="mt-3 text-danger text-center"></div>
</div>

<div id="thanks" class="container mt-5"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
  const form = document.getElementById("contactForm");
  const thanks = document.getElementById("thanks");
  const sendButton = document.querySelector("button");
  const errorMessage = document.getElementById("errormessage");

  const EMAIL_REG_EXP = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  async function submit() {
    sendButton.disabled = true;

    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const addr = document.getElementById("addr").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("mail").value;
    const content = document.getElementById("toiawasehonbun").value;
    console.log(content)

    try {
      if (!EMAIL_REG_EXP.test(email)) throw "メールアドレスが不正です";
      if (content.length === 0) throw "お問い合わせ内容が空欄です";
    } catch (e) {
      errorMessage.textContent = e;
      sendButton.disabled = false;
      return;
    }

    const config = {
      method: "POST",
      url: "https://us-central1-nipo-plus.cloudfunctions.net/inqueryWebCommon",
      data: {
        name,
        company,
        addr, // ← 新しく追加された住所
        tel,
        email,
        text: content,
        site: "hotaka-law"
      }
    };

    axios(config);
    form.style.display = "none";
    thanks.textContent = `お問い合わせありがとうございます。${email} 宛に確認メールを送信いたしました。5分以内に届かない場合は再度お問い合わせください。`;
  }
</script>