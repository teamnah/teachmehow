export const AppComponent = {
  template: `
    <!-- NAVIGATION -->
    <nav class="navbar navbar-inverse" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" ui-sref="#">Teach Me How</a>
        </div>
        <ul class="nav navbar-nav">
            <!-- Load our routers
              <li><a ui-sref="home">Home</a></li>
            -->
        </ul>
    </nav>
    <div>
        <div ui-view></div>
    </div>
    <footer>
        Copyright MyApp 2016.
    </footer>
  `
};