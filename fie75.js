<!DOCTYPE html>
<html>
<head>
    <title>DOM Practice</title>
</head>
<body>

    <h1 id="title">Hello World</h1>
    <button id="btn">Change Text</button>

    <script>
        const title = document.getElementById("title");
        const btn = document.getElementById("btn");

        btn.addEventListener("click", function() {
            title.textContent = "Hello Sehrish!";
        });
    </script>

</body>
</html>