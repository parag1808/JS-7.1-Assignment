var likeBtn = document.getElementById("like-btn");
			var unlikeBtn = document.getElementById("unlike-btn");

			likeBtn.style.display = "block";
			 unlikeBtn.style.display = "none";

			likeBtn.addEventListener("click", likeFunc);

			unlikeBtn.addEventListener("click", unlikeFunc);

			function likeFunc(){
				likeBtn.style.display = "none";
			 	unlikeBtn.style.display = "block";
			 	console.log("Liked Me");
			}

			function unlikeFunc(){
				likeBtn.style.display = "block";
			 	unlikeBtn.style.display = "none";
			 	console.log("unLiked Me");
			}