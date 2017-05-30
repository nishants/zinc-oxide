app.service("SceneEditors", ['ZincImagineEditorService', 'ZincVisualizeEditorService', function (ZincImagineEditorService, ZincVisualizeEditorService) {


  return {
    zincing: {
      imagine: ZincImagineEditorService,
      visualize: ZincVisualizeEditorService,
    }
  };
}]);