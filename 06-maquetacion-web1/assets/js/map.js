document.addEventListener("DOMContentLoaded", (event)=>{
    setTimeout(()=>{
        document.getElementById('load-iframe-map').innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.131986222631!2d-78.66057682413941!3d-1.6658971361606858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3a820abc77d19%3A0x6af3d35b32e9fc85!2sAv.%20Daniel%20Le%C3%B3n%20Borja%2C%20Riobamba%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1698970976091!5m2!1sen!2sus" ></iframe>`
    }, 1000);
})