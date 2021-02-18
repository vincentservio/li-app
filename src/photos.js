const loadPhotos = () => {
  const home = document.getElementById("photo-grid");
  home.innerHTML += ` 
<div class="slide-container">
      <div class="slide fade">
        <img src='https://previews.dropbox.com/p/thumb/ABFPMGtF5pt_r7MKcPQEz6oGIheeOE4tHSaMKvN17zzVdK__Ts11akj1Vx3fS3z1lwh0UYmbr870JXxCTiLMW3dySshdP1Gx6d0DGGgnjJvEyG56VUkrGIasXxapEFVsexbytUfHUKbJ6yHCAmNlODtCVKF0-0848Qg2CIm0mFwptKacxQTxaIrjcQfNIen6kvI1_4EUDbvLbn_IZgzwal7kpfSV_rMCl7MaGamqLMNGgcOE2FvILrmJpJeaMNH3SvSZnBiDzdWZYdZRwOUXELoMwKJu_Z6VsBpwDz1jZWdbPZHTDYJ8Q1EpLkF4-yx3kQ6tuu-P3EGFD1l80ahZtJQmUs8ecqkqV8gmma-VCW9NpQ/p.jpeg?fv_content=true&size_mode=5' alt=''>
      </div>
      <div class="slide fade">
        <img src='https://previews.dropbox.com/p/thumb/ABEmD6azNV-ab5Tj1t8x75aUJSTSBgCGAShto2WKu75rzDygxHbFMY0xZJeyrM_hfXC09BxG8_BvelWDsezievuCxjuVJT5oQqoE-WFGcy6sTsDo0zpm9fGzaFcNYDAyX4bZ-Qt7xXGm7aYgdRdCptUK8A5xx4LRv3-nIYDnKGjLiG76S5R_wbVYfqN7-lBM8b6GHUl5qqvVf2hBu4Kd9F3n6UImcMQsFNn6aNcrC2k5AHzPvECl1FuCGvJCmgUIz-sfZLMM-i2zGwMcU5LigN-qWD1DN4nmxu9vyonEGVdOG93-xq17o7gF4NplrmExk6NWcIPJDeX42I-_lxaDUltG-a7G1Mh_P11dUBdwzqHPwJnRiisXJKoJ3d5jEVKRkOCg5JMqExhttAmzLtsXdxpG6RSOzyzjtB-ZBfaukjswcQ/p.jpeg?fv_content=true&size_mode=5' alt=''>
      </div>
      <div class="slide fade">
        <img src='https://previews.dropbox.com/p/thumb/ABHLSWwG47UKqp800Jqj-vJH89jTFQOFXaEiDMNR6Dc3YmmGoqZKEHVGAI8G93U32qr9UHhpEW0uDJEGVL86Wqt4JLHDvhvwpo2CqaFoWdsrLdYEJIyJh-afMOk3_Xgt5gKJXfKajMLEPFDGU9edb3qq3bsdujy0bz_kDWmSzhVU7v8A9Ww7i407Hsp-1lc8Ex1xQUTovaDsez2dSq9yemFAosS8Vsr7MZEePgFkX2573IpattnSYyQswhtFW6GXER586XplnjTBmOsSbY1v2vp7JMr4nWPqTDXs1KvPDVdqADNpUZyvCxzXtnHUHREhtPsL3ukBYjbWKzM8aWXjtmtQS6FF0LcVX-Gj2vSELRyLYA/p.jpeg?fv_content=true&size_mode=5' alt=''>
      </div>
      <div class="slide fade">
        <img src='https://previews.dropbox.com/p/thumb/ABGEcQs0iJO3WMbGHqLHuxTMUMy1-t5_v-dQo_Olpcm0mclHn8xTCbdlgz2oHxuU9SlN3fskcVm-fN56hDSEQtx3E1kIUYPwQfJmzh_GAtAdCwR2rPG2iI3PIdQE0BJ_rDNhE3mWNkdOsTpVIGiiWZEURdKmrPhWQWH1x1PYd-_MbclGGHRKrxyYIaytUQhr7vBEggs7GT5PmdNd7G1Aq82L6J4n0zYWl5dBzQ46RilAWpToXIH-9Afle_fBjGj70aqcsuvIcB15y002_56RmQlqThKWQWRUxXufEV9LIPF9l1rGT1vVT23Dmv_feZXD5XH342UzXo7zq8t2Ew1zoGTUS5MIPAwYZkqBFqMFXTkpKR9aK7zN7S7BlX9ZOdd2bSTXAgsCy9wkurwqy1tQlf0S85cu86pbD2e4vUpgvFPKQg/p.jpeg?fv_content=true&size_mode=5' alt=''>
      </div>

      <a href="#" class="prev" title="Previous">&#10094</a>
      <a href="#" class="next" title="Next">&#10095</a>
    </div>
    <br/>
    <div class="dots-container">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>


  `;
};
