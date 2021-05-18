mock服务器

## 使用

```
npm start
```

## fiddler

autoResponse配置规则

如下:
```
regex:https://pyinsight-test.xiao100.com/api/open/student/(addStudentTag|list)

http://localhost:8808/open/student/$1
```

