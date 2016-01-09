include_recipe 'build-essential::default'
include_recipe 'python::pip'
include_recipe 'python::virtualenv'

package 'epel-release'
package 'vim'
