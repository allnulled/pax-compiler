module.exports = function (method, args = [], force = false, showValues = false) {
  if ((!PaxTracer.isTracing) && (!force)) return false;
  let isMatchedByDebuggers = false;
  Debugger_layer: {
    if (!PaxTracer.hasTraceDebuggers.length) break Debugger_layer;
    if (PaxTracer.hasTraceDebuggers[0] === "*") {
      isMatchedByDebuggers = true;
      break Debugger_layer;
    }
    if (PaxTracer.hasTraceDebuggers.length) {
      for (let index = 0; index < PaxTracer.hasTraceDebuggers.length; index++) {
        const filter = PaxTracer.hasTraceDebuggers[index];
        const pos = method.indexOf(filter);
        if (pos !== -1) {
          isMatchedByDebuggers = true;
          break Debugger_layer;
        }
      }
      isMatchedByDebuggers = false;
    }
  }
  const shouldDebug = showValues || isMatchedByDebuggers;
  let msg = `[trace][pax-compiler] ${method} +${args.length}=[`;
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (shouldDebug) {
      msg += (index === 0 ? "" : ",") + "\n  " + `${index}:${typeof (arg)}=${PaxTracer.debuggify(arg)}`;
    } else {
      msg += (index === 0 ? "" : ",") + `${index}:${typeof (arg)}`;
    }
  }
  msg += `]`;
  Filter_layer: {
    if (!PaxTracer.hasTraceFilters.length) {
      break Filter_layer;
    }
    if (PaxTracer.hasTraceFilters[0] === "*") {
      break Filter_layer;
    }
    for (let index = 0; index < PaxTracer.hasTraceFilters.length; index++) {
      const filter = PaxTracer.hasTraceFilters[index];
      if (msg.indexOf(filter) !== -1) {
        break Filter_layer;
      }
    }
    return false;
  }
  console.log(msg);
};