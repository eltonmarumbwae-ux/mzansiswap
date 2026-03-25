// POST ITEM IMAGE PREVIEW
const imageInput = document.getElementById("images");
const imagePreview = document.getElementById("imagePreview");
const postItemForm = document.getElementById("postItemForm");
const successMessage = document.getElementById("successMessage");

if (imageInput && imagePreview) {
  imageInput.addEventListener("change", function () {
    imagePreview.innerHTML = "";
    const files = Array.from(this.files);

    if (files.length > 8) {
      alert("You can upload a maximum of 8 images.");
      this.value = "";
      return;
    }

    files.forEach(file => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  });
}

// POST ITEM FORM SUBMIT
if (postItemForm) {
  postItemForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const images = imageInput ? imageInput.files : [];

    if (title.length < 5) {
      alert("Title must be at least 5 characters.");
      return;
    }

    if (description.length < 20) {
      alert("Description must be at least 20 characters.");
      return;
    }

    if (!images || images.length < 1) {
      alert("Please upload at least 1 image.");
      return;
    }

    const listingData = {
      title: document.getElementById("title").value,
      category: document.getElementById("category").value,
      price: document.getElementById("price").value,
      negotiable: document.getElementById("negotiable").checked,
      condition: document.getElementById("condition").value,
      province: document.getElementById("province").value,
      city: document.getElementById("city").value,
      suburb: document.getElementById("suburb").value,
      pickupArea: document.getElementById("pickupArea").value,
      description: document.getElementById("description").value,
      contactMethod: document.getElementById("contactMethod").value,
      imageCount: images.length
    };

    console.log("Listing Data:", listingData);

    if (successMessage) {
      successMessage.style.display = "block";
    }

    postItemForm.reset();
    if (imagePreview) imagePreview.innerHTML = "";

    setTimeout(() => {
      if (successMessage) {
        successMessage.style.display = "none";
      }
    }, 5000);
  });
}

// AUTH TABS
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if (loginTab && registerTab && loginForm && registerForm) {
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  });

  registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  });
}