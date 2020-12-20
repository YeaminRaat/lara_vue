<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Starter Page | Skote - Responsive Bootstrap 4 Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{asset('admin')}}/assets/images/favicon.ico">
        <!-- App css -->
        <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
    </head>

    <body data-sidebar="dark">
        <div id="app">
            
        
        <!-- Begin page -->
        <div id="layout-wrapper">

            <header-component></header-component>

            <!-- ========== Left Sidebar Start ========== -->
            <left-sidebar-component></left-sidebar-component>
            <!-- Left Sidebar End -->

            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">

                        <router-view></router-view>
                    
                    </div>
                </div>
                <!-- End Page-content -->
                <footer-component></footer-component>
            </div>
            <!-- end main content-->
        </div>
        <!-- END layout-wrapper -->

        <!-- Right Sidebar -->
        <right-sidebar-component></right-sidebar-component>
        <!-- /Right-bar -->

        <!-- Right bar overlay-->
        <div class="rightbar-overlay"></div>

        </div>
        <!-- JAVASCRIPT -->
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
