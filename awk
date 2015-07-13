shell中的test语句只能用于整数判断，要判断小数用awk吧，awk中是C语言环境：
var=.21
var="0"$var
echo $var | awk '{if($0 < 1) print "Less than 1"; else print "No less than 1"}'