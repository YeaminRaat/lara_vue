<template>
	<div>
		<div class="vertical-menu">
            <div data-simplebar class="h-100">
                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li class="menu-title">Menu</li>
                        <li>
                            <a href="javascript: void(0);" class="waves-effect">
                                <i class="bx bx-home-circle"></i><span class="badge badge-pill badge-info float-right">03</span>
                                <span>Dashboards</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><router-link to="/about">About</router-link></li>
                                <li><router-link to="/test">Test</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <!-- Sidebar -->
            </div>
        </div>
	</div>
</template>